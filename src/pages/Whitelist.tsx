import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Input,
  Card,
  CardContent,
  Typography,
  CardActions,
  TextField,
  ButtonBase,
} from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  GlobalStateInterface,
  useGlobalState,
} from "../components/GlobalStateProvider";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function WhitelistItems(props: {
  items: string[];
  setItems: Dispatch<SetStateAction<string[]>>;
}) {
  const [inputValue, setInputValue] = useState("");
  const { state } = useGlobalState();
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  let listItems = props.items.map((item: string) => (
    <ListItem key={item as React.Key}>
      <Card
        style={{
          alignContent: "center",
          margin: "auto",
          width: "88%",
          border: "3px solid green",
          marginTop: "15px",
          minWidth: 275,
        }}
      >
        <CardContent
          style={{ float: "left", padding: "16px", backgroundColor: "#3A9B57" }}
        >
          <Box>
            <Typography style={{ fontWeight: "800" }}>{item}</Typography>
          </Box>
        </CardContent>
        <CardActions style={{ float: "right", backgroundColor: "black" }}>
          <ButtonBase
            onClick={() => removeWhiteListItem(item, state, props.setItems)}
          >
            <IconButton aria-label="delete" disabled style={{ color: "white" }}>
              <DeleteIcon />
            </IconButton>
          </ButtonBase>
        </CardActions>
      </Card>
    </ListItem>
  ));
  listItems.push(
    <ListItem
      key={0}
      style={{
        alignContent: "center",
        margin: "auto",
        width: "88%",
        border: "3px solid green",
        marginTop: "15px",
        minWidth: 275,
      }}
    >
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
        onClick={() => addWhiteListItem(inputValue, state, props.setItems)}
      >
        <ListItemIcon>
          <AddCircleOutline
            style={{ width: "50px", height: "50px", color: "black" }}
          />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
  return <>{listItems}</>;
}

function addWhiteListItem(
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
    .post(`${process.env.REACT_APP_API_URL}/api/v1/whitelist`, data, {
      headers: headers,
    })
    .then((response) => setItems(response.data.whitelist));
}

function removeWhiteListItem(
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
    .delete(`${process.env.REACT_APP_API_URL}/api/v1/whitelist/`, {
      headers: headers,
      data: data,
    })
    .then((response) => {
      setItems(response.data.whitelist);
    });
}

export default function Whitelist() {
  const [items, setItems] = useState<string[]>([]);
  const { state } = useGlobalState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/whitelist/`, {
        headers: {
          Authorization: `Bearer ${state.accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setItems(response.data.whitelist);
      });
  }, [state.accessToken]);

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#fafafa", height: "100vh", p: 2 }}>
          <List>
            {items && <WhitelistItems items={items} setItems={setItems} />}
          </List>
        </Box>
      </Container>
    </>
  );
}
