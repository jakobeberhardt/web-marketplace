import {
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { CheckCircle, Handshake } from "@mui/icons-material";
import Bid from "../../types/Bid";
import { useGlobalState, GlobalStateInterface } from "../GlobalStateProvider";
import axios from "axios";
import React from "react";

function BidItems(props: {
  items: Bid[];
  state: Partial<GlobalStateInterface>;
  setItems: Function;
}) {
  return (
    <>
      {props.items.map((item: Bid) => (
        <ListItem
          key={item.userId as React.Key}
          style={{
            backgroundColor: "white",
            margin: "40px",
            width: "auto",
            alignItems: "center",
          }}
        >
          <div>
            {/* <Typography style={{}}>Spedition Mustermann</Typography> */}
            <Typography>{item.value.toString()}</Typography>
          </div>
          <ListItemButton
            data-testid="acceptOffer"
            style={{ marginLeft: "auto", marginRight: "0" }}
            onClick={() => acceptOffer(item, props.state, props.setItems)}
          >
            <CheckCircle color="success" />
            <Handshake />
            Zuschlag erteilen
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
}

function acceptOffer(
  item: Bid,
  state: Partial<GlobalStateInterface>,
  setItems: Function
) {
  const data = {
    bid: item,
  };
  const headers = {
    Authorization: `Bearer ${state.accessToken}`,
    "Content-Type": "application/json",
  };
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/v1/biddings/assignBidding`,
      data,
      {
        headers: headers,
      }
    )
    .then((response) => setItems(response));
}

export function Bids(props: { items: Array<Bid>; setItems: Function }) {
  const { state } = useGlobalState();
  return (
    <>
      <List
        style={{
          backgroundColor: "#D9D9D9",
          margin: "0",
          height: "100%",
        }}
      >
        {props.items && (
          <BidItems
            items={props.items}
            state={state}
            setItems={props.setItems}
          />
        )}
      </List>
    </>
  );
}
