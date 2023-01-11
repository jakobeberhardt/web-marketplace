import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import Bid from "../../../types/Bid";
import {
  useGlobalState,
  GlobalStateInterface,
} from "../../GlobalStateProvider";
import axios from "axios";
import React from "react";
import HandshakeIcon from "@mui/icons-material/Handshake";

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
            margin: "35px",
            width: "auto",
            alignItems: "center",
          }}
        >
          <div
            style={{ margin: "auto", marginRight: "20rem", padding: "1rem" }}
          >
            <Typography data-testid="userID">{item.userId}</Typography>
            <Typography data-testid="offerValue">
              {item.value.toString()} €
            </Typography>
          </div>
          <ListItemButton
            onClick={() => acceptOffer(item, props.state, props.setItems)}
            style={{
              marginLeft: "auto",
              marginRight: "0",
              alignSelf: "stretch",
            }}
          >
            <HandshakeIcon
              style={{
                margin: "auto",
                height: "35px",
                width: "35px",
              }}
              color="success"
            />
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
  const data = item;
  const headers = {
    Authorization: `Bearer ${state.accessToken}`,
    "Content-Type": "application/json",
  };
  axios
    .post(
      `${process.env.REACT_APP_API_URL_LOCAL_AUTH}/api/v1/biddings/assignBidding`,
      data,
      {
        headers: headers,
      }
    )
    .then((response) => {
      if (response.status === 200) {
        axios
          .get(`${process.env.REACT_APP_API_URL_LOCAL_AUTH}/api/v1/biddings/`, {
            headers: {
              Authorization: `Bearer ${state.accessToken}`,
              "Content-Type": "application/json",
            },
          })
          .then((getreponse) => setItems(getreponse.data));
      }
    });
}

export function BidsActive(props: { items: Array<Bid>; setItems: Function }) {
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
