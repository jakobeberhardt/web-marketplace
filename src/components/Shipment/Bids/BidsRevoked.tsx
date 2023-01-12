import { List, ListItem, Typography } from "@mui/material";
import Bid from "../../../types/Bid";
import React from "react";

function BidItems(props: { items: Bid[] }) {
  return (
    <>
      {props.items.map((item: Bid) => (
        <ListItem
          key={item.userId as React.Key}
          style={{
            backgroundColor: "white",
            margin: "35px",
            width: "auto",
            alignItems: "center",
          }}
        >
          <div
            style={{ margin: "auto", marginRight: "20rem", padding: "1rem" }}
          >
            <Typography data-testid="offerValue">
              {item.userId}: {item.value.toString()} €
            </Typography>
          </div>
        </ListItem>
      ))}
    </>
  );
}

export function BidsRevoked(props: { items: Array<Bid> }) {
  return (
    <>
      <List
        style={{
          backgroundColor: "#D9D9D9",
          margin: "0",
          height: "100%",
        }}
      >
        {<BidItems items={props.items} />}
      </List>
    </>
  );
}
