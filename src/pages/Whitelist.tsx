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
    .post(`${process.env.REACT_APP_API_URL}/api/v1/auth/register`, {
      headers: {
        Authorization: `Bearer ${state.accessToken}`,
        "Content-Type": "application/json",
      },
      data: {
        id: item,
      },
    })
    .then((response) => setItems(response.data.whitelist));
}

function removeWhiteListItem(
  item: String,
  state: Partial<GlobalStateInterface>,
  setItems: Dispatch<SetStateAction<String[]>>
) {
  axios
    .delete(`${process.env.REACT_APP_API_URL}/api/v1/whitelist/`, {
      headers: {
        Authorization: `Bearer ${state.accessToken}`,
        "Content-Type": "application/json",
      },
      data: {
        id: item,
      },
    })
    .then((response) => setItems(response.data.whitelist));
}

export default function Whitelist() {
  const [items, setItems] = useState<String[]>([]);
  const { state } = useGlobalState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/whitelist/`, {
        headers: {
          Authorization: `Bearer ${state.accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => setItems(response.data));
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
