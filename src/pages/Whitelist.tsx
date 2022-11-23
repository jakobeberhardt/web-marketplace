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
import { useEffect, useState } from "react";
import { useGlobalState } from "../components/GlobalStateProvider";

function WhitelistItems(props: { items: String[] }) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };
  let listItems = props.items.map((item: String) => (
    <ListItem>
      <ListItemText primary={item} />
      <ListItemButton
        alignItems="center"
        onClick={() => removeWhiteListItem(item)}
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
        onClick={() => addWhiteListItem(inputValue)}
      >
        <ListItemIcon>
          <AddCircleOutline />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
  return <>{listItems}</>;
}

function addWhiteListItem(item: string) {
  if (!item) return;
  const { state } = useGlobalState();
  axios.delete("https://api.jeberhardt.dev/api/v1/whitelist/", {
    headers: {
      Authorization: `Bearer ${state.accessToken}`,
      "Content-Type": "application/json",
    },
    data: {
      item,
    },
  });
}

function removeWhiteListItem(item: String) {
  const { state } = useGlobalState();
  axios.delete("https://api.jeberhardt.dev/api/v1/whitelist/", {
    headers: {
      Authorization: `Bearer ${state.accessToken}`,
      "Content-Type": "application/json",
    },
    data: {
      item,
    },
  });
}

function fetchWhiteListItems() {}

export default function Whitelist() {
  /* const [, items setItems] = useState<String[]>([]);
  const { state } = useGlobalState(); */
  const items = ["Test", "NeoCargo", "Jakob", "Nik", "Kevin", "Lisa"];

  /* useEffect(() => {
    axios
      .get("https://api.jeberhardt.dev/api/v1/whitelist/", {
        headers: {
          Authorization: `Bearer ${state.accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((data) => setItems(data.data));
  }, [state.accessToken]);
  } */
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#fafafa", height: "100vh", p: 2 }}>
          <List>{items && <WhitelistItems items={items} />}</List>
        </Box>
      </Container>
    </>
  );
}
