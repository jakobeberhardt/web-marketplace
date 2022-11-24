/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Input,
} from "@mui/material";
import { DeleteOutline, AddCircleOutline } from "@mui/icons-material";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  GlobalStateInterface,
  useGlobalState,
} from "../components/GlobalStateProvider";

function WhitelistItems(props: {
  items: String[];
  setItems: Dispatch<SetStateAction<String[]>>;
}) {
  const [inputValue, setInputValue] = useState("");
  const { state } = useGlobalState();
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };
  let listItems = props.items.map((item: String) => (
    <ListItem>
      <ListItemText primary={item} />
      <ListItemButton
        alignItems="center"
        onClick={() => removeWhiteListItem(item, state, props.setItems)}
      >
        <ListItemIcon>
          <DeleteOutline />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  ));
  listItems.push(
    <ListItem>
      <Input onChange={handleChange} value={inputValue} />
      <ListItemButton
        alignItems="center"
        onClick={() => addWhiteListItem(inputValue, state, props.setItems)}
      >
        <ListItemIcon>
          <AddCircleOutline />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
  return <>{listItems}</>;
}

function addWhiteListItem(
  item: string,
  state: Partial<GlobalStateInterface>,
  setItems: Dispatch<SetStateAction<String[]>>
) {
  if (!item) return;
  axios
    .post("http://localhost:8080/api/v1/users/whitelist/", {
      headers: {
        Authorization: `Bearer ${state.accessToken}`,
        "Content-Type": "application/json",
      },
      data: {
        item,
      },
    })
    .then(() => fetchWhiteListItems(state, setItems));
}

function removeWhiteListItem(
  item: String,
  state: Partial<GlobalStateInterface>,
  setItems: Dispatch<SetStateAction<String[]>>
) {
  axios
    .delete("http://localhost:8080/api/v1/users/whitelist/", {
      headers: {
        Authorization: `Bearer ${state.accessToken}`,
        "Content-Type": "application/json",
      },
      data: {
        item,
      },
    })
    .then(() => fetchWhiteListItems(state, setItems));
}

function fetchWhiteListItems(
  state: Partial<GlobalStateInterface>,
  setItems: Dispatch<SetStateAction<String[]>>
) {
  axios
    .get("http://localhost:8080/api/v1/users/whitelist/", {
      headers: {
        Authorization: `Bearer ${state.accessToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((data) => setItems(data.data));
}

export default function Whitelist() {
  const [items, setItems] = useState<String[]>([]);
  const { state } = useGlobalState();
  //const items = ["Test", "NeoCargo", "Jakob", "Nik", "Kevin", "Lisa"];

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/users/whitelist/", {
        headers: {
          Authorization: `Bearer ${state.accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((data) => setItems(data.data));
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
