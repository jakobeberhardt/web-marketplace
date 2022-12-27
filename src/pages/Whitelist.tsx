import {
  Box,
  ListItemButton,
  ListItemIcon,
  Input,
  TextField,
  ButtonBase,
} from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
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
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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
    <GridToolbarContainer>
      <TextField
        id="basic"
        label="Bieter zur Liste hinzufügen"
        style={{ alignContent: "center" }}
        onChange={handleChange}
      >
        <Input
          style={{ margin: "6px", borderWidth: "0", width: "100%" }}
          value={inputValue}
        />
      </TextField>
      <ListItemButton
        style={{ float: "right" }}
        alignItems="center"
        onClick={() =>
          addAllowListItem(inputValue, props.state, props.setItems)
        }
      >
        <ListItemIcon>
          <AddCircleOutline
            style={{
              width: "50px",
              height: "50px",
              color: "black",
            }}
          />
        </ListItemIcon>
      </ListItemButton>
      {props.selectionModel.length > 0 && (
        <ButtonBase
          onClick={() =>
            removeAllowListItem(
              props.selectionModel,
              props.state,
              props.setItems
            )
          }
        >
          <IconButton
            aria-label="delete"
            disabled
            style={{ color: "black", opacity: "0.3" }}
          >
            {`Delete ${props.selectionModel.length} items`}
            <DeleteIcon style={{ width: "20px", height: "20px" }} />
          </IconButton>
        </ButtonBase>
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
  const data = {
    id: items[0].toString(),
  };
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
    { field: "allowlistgroup", headerName: "Bieterkreisgruppe", width: 300 },
    { field: "ffid", headerName: "NeoCargo-ID", width: 300 },
    { field: "mail", headerName: "Email", width: 300 },
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
      {/* <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <TableHead>
            <TableRow>
              <TableCell align="left" padding="normal">
                Bieterkreisgruppe
              </TableCell>
              <TableCell align="center" padding="normal">
                FF-ID
              </TableCell>
              <TableCell align="center" padding="normal">
                Mail
              </TableCell>
              <TableCell align="right" padding="none" />
            </TableRow>
          </TableHead>
          <TableBody>
            {items &&
              items.map((item) => {
                return (
                  <TableRow hover>
                    <TableCell align="left">Beispielgruppe</TableCell>
                    <TableCell component="th" id={item}>
                      {item}
                    </TableCell>
                    <TableCell align="right">example@neocargo.de</TableCell>
                    <TableCell align="right">
                      <ButtonBase
                        onClick={() =>
                          removeAllowListItem(item, state, setItems)
                        }
                      >
                        <IconButton
                          aria-label="delete"
                          disabled
                          style={{ color: "black", opacity: "0.3" }}
                        >
                          <DeleteIcon
                            style={{ width: "20px", height: "20px" }}
                          />
                        </IconButton>
                      </ButtonBase>
                    </TableCell>
                  </TableRow>
                );
              })}
            <TableRow>
              <TableCell>
                <TextField
                  id="basic"
                  label="Bieter zur Liste hinzufügen"
                  style={{ alignContent: "center" }}
                  onChange={handleChange}
                >
                  <Input value={inputValue} />
                </TextField>
              </TableCell>
              <TableCell>
                <ListItemButton
                  style={{ float: "right" }}
                  alignItems="center"
                  onClick={() => addAllowListItem(inputValue, state, setItems)}
                >
                  <ListItemIcon>
                    <AddCircleOutline
                      style={{
                        width: "25px",
                        height: "25px",
                        color: "black",
                      }}
                    />
                  </ListItemIcon>
                </ListItemButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Paper>
      </Box> */}
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
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
        ></DataGrid>
      </Box>
    </>
  );
}
