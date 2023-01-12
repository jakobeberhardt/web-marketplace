import { Box, TextField } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridSelectionModel,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  GlobalStateInterface,
  useGlobalState,
} from "../components/GlobalStateProvider";
//import "./Whitelist.sass";

function CustomToolbarComponent(props: {
  selectionModel: GridSelectionModel;
  state: Partial<GlobalStateInterface>;
  setItems: Dispatch<SetStateAction<string[]>>;
}) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <GridToolbarContainer
      sx={{
        margin: "20px",
        padding: "4px",
        borderBottom: "2px green solid",
      }}
    >
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 15px ",
          borderRadius: "25px",
          marginLeft: "15px",
          marginRight: "0",
          border: "none",
          fontFamily: "monospace",
        }}
        onClick={() =>
          addAllowListItem(inputValue, props.state, props.setItems)
        }
      >
        Nutzer hinzufügen
      </button>
      <TextField
        id="basic"
        data-testid="userInput"
        style={{
          marginLeft: "15px",
          marginRight: "auto",
          marginBottom: "20px",
          width: "250px",
          height: "50px",
        }}
        onChange={handleChange}
        value={inputValue}
        label="NeoCargo ID z.B.: 12345"
        InputProps={{
          inputProps: { maxLength: 5 },
        }}
      />

      {props.selectionModel.length > 0 && (
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px 15px ",
            borderRadius: "25px",
            marginLeft: "auto",
            marginRight: "15px",
            border: "none",
            fontFamily: "monospace",
          }}
          onClick={() =>
            removeAllowListItem(
              props.selectionModel,
              props.state,
              props.setItems
            )
          }
          data-testid="deleteButton"
        >
          {`Entferne ${props.selectionModel.length} Nutzer`}
        </button>
      )}
    </GridToolbarContainer>
  );
}

function addAllowListItem(
  item: string,
  state: Partial<GlobalStateInterface>,
  setItems: Dispatch<SetStateAction<string[]>>
) {
  const headers = {
    Authorization: `Bearer ${state.accessToken}`,
    "Content-Type": "application/json",
  };
  const data = {
    id: item,
  };
  axios
    .post(
      `${process.env.REACT_APP_API_URL_LOCAL_AUTH}/api/v1/whitelist`,
      data,
      {
        headers: headers,
      }
    )
    .then((response) => setItems(response.data.whitelist));
}

function removeAllowListItem(
  items: GridSelectionModel,
  state: Partial<GlobalStateInterface>,
  setItems: Dispatch<SetStateAction<string[]>>
) {
  const headers = {
    Authorization: `Bearer ${state.accessToken}`,
    "Content-Type": "application/json",
  };

  const data = items.map((e) => {
    return { id: e.toString() };
  });
  axios
    .delete(`${process.env.REACT_APP_API_URL_LOCAL_AUTH}/api/v1/whitelist/`, {
      headers: headers,
      data: data,
    })
    .then((response) => {
      setItems(response.data.whitelist);
    });
}

export default function Allowlist() {
  const [items, setItems] = useState<string[]>([]);
  const { state } = useGlobalState();
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL_LOCAL_AUTH}/api/v1/whitelist/`, {
        headers: {
          Authorization: `Bearer ${state.accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setItems(response.data.whitelist);
      });
  }, [state.accessToken]);

  const columns: GridColDef[] = [
    {
      field: "allowlistgroup",
      headerName: "Bieterkreisgruppe",
      minWidth: 300,
      maxWidth: Infinity,
    },
    {
      field: "ffid",
      headerName: "NeoCargo-ID",
      minWidth: 300,
      maxWidth: Infinity,
    },
    { field: "mail", headerName: "Email", minWidth: 300, maxWidth: Infinity },
  ];

  const rows = items.map((item) => {
    return {
      id: item,
      allowlistgroup: "Beispielbieterkreis",
      ffid: item,
      mail: "example@neocargo.de",
    };
  });

  return (
    <>
      <Box sx={{ height: "83vh", width: "100%" }}>
        <DataGrid
          sx={{
            border: "solid",
            borderWidth: 2,
            borderColor: "green",
          }}
          pageSize={5}
          columns={columns}
          rowsPerPageOptions={[5]}
          rows={items && rows}
          checkboxSelection
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
          disableSelectionOnClick
          components={{
            Toolbar: CustomToolbarComponent,
          }}
          componentsProps={{
            toolbar: { selectionModel, state, setItems },
          }}
        />
      </Box>
    </>
  );
}
