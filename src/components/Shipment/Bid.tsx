import {
  Button,
  Card,
  CardContent,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { Euro } from "@mui/icons-material";
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
      .then((response) => setItems(response.data.whitelist))
      .then(() => (data.value = ""));
  };

  return (
    <>
      <Card /* key={props.item.id as React.Key} */
        sx={{
          margin: "50px",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        {/*Display Action for placing a bid*/}
        {!(props.items.length > 0) && (
          <CardContent style={{ display: "flex" }}>
            <TextField
              value={inputValue}
              onChange={handleChange}
              type="number"
              label="Gebot"
              InputProps={{
                inputProps: { min: 0 },
                endAdornment: (
                  <InputAdornment position="start">
                    <Euro />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              style={{ marginLeft: "auto", marginRight: "0" }}
              onClick={() => submitBidding(inputValue, props.setItems)}
              variant="contained"
            >
              Gebot abgeben
            </Button>
          </CardContent>
        )}
        {/*Display placed bid*/}
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
