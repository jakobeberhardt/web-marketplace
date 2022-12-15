import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
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
          <div
            style={{ margin: "auto", marginRight: "30rem", padding: "1rem" }}
          >
            {/* <Typography style={{}}>Spedition Mustermann</Typography> */}
            <Typography>{item.value.toString()} €</Typography>
          </div>
          <ListItemButton
            onClick={() => acceptOffer(item, props.state, props.setItems)}
            style={{
              marginLeft: "auto",
              marginRight: "0",
              alignSelf: "stretch",
            }}
          >
            <CheckCircle
              style={{
                margin: "auto",
                height: "30px",
                width: "30px",
              }}
              color="success"
            />
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
        {
          <BidItems
            items={props.items}
            state={state}
            setItems={props.setItems}
          />
        }
      </List>
    </>
  );
}
