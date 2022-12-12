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

export function Bid(props: {
  biddingID: String;
  items: BidClass[];
  setItems: Function;
}) {
  const [inputValue, setInputValue] = useState("");
  const { state } = useGlobalState();
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const submitBidding = (
    biddingID: String,
    inputValue: String,
    setItems: Function
  ) => {
    const data = {
      id: biddingID,
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
        {/*Display Action for placing a bid*/}
        {!(props.items.length > 0) && (
          <CardContent>
            <TextField
              value={inputValue}
              onChange={handleChange}
              type="number"
              label="Gebot"
              InputProps={{
                inputProps: { min: 0 },
                startAdornment: (
                  <InputAdornment position="start">
                    <Euro />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              onClick={() =>
                submitBidding(props.biddingID, inputValue, props.setItems)
              }
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
