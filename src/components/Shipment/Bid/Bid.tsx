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
import BidClass from "../../../types/Bid";
import { useGlobalState } from "../../GlobalStateProvider";

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
      biddingId: biddingID,
      userId: state.userId,
      value: inputValue as unknown as Number,
      currency: "Euro",
    };
    const headers = {
      Authorization: `Bearer ${state.accessToken}`,
      "Content-Type": "application/json",
    };
    axios
      .post(
        `${process.env.REACT_APP_API_URL_LOCAL_AUTH}/api/v1/biddings/bid`,
        data,
        {
          headers: headers,
        }
      )
      .then((response) => {
        if (response.status === 201) {
          axios
            .get(
              `${process.env.REACT_APP_API_URL_LOCAL_AUTH}/api/v1/biddings/assigned`,
              {
                headers: {
                  Authorization: `Bearer ${state.accessToken}`,
                  "Content-Type": "application/json",
                },
              }
            )
            .then((reponse) => setItems(reponse.data));
        }
      });
  };

  return (
    <>
      <Card
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
              data-testid="bidInput"
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
              style={{ marginLeft: "auto" }}
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
                <ListItemText
                  primary={`Ihr Gebot: ${props.items[0].value.toString()} €`}
                />
              </ListItem>
            </List>
          </CardContent>
        )}
      </Card>
    </>
  );
}
