import {
  Button,
  Card,
  CardContent,
  Input,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import BidClass from "../../types/Bid";
import { useGlobalState } from "../GlobalStateProvider";

export function Bid(props: { items: BidClass[]; setItems: Function }) {
  const [inputValue, setInputValue] = useState("");
  const { state } = useGlobalState();
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const submitBidding = (inputValue: String, setItems: Function) => {
    const data = {
      value: inputValue,
    };
    const headers = {
      Authorization: `Bearer ${state.accessToken}`,
      "Content-Type": "application/json",
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/biddings/bid`, data, {
        headers: headers,
      })
      .then((response) => setItems(response.data.whitelist));
  };

  return (
    <>
      <Card /* key={props.item.id as React.Key} */
        sx={{
          mt: "30px",
          mb: "30px",
          mr: "30px",
          borderRadius: "10px",
        }}
      >
        {!(props.items.length > 0) && (
          <CardContent>
            <Input value={inputValue} onChange={handleChange} />
            <Button onClick={() => submitBidding(inputValue, props.setItems)} />
          </CardContent>
        )}
        {props.items.length > 0 && (
          <CardContent>
            <List>
              <ListItem>
                <ListItemText primary={props.items[0].value.toString()} />
              </ListItem>
            </List>
          </CardContent>
        )}
      </Card>
    </>
  );
}
