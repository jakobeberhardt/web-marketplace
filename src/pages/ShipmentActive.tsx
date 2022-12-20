import * as React from "react";
import { ShipmentItem } from "../components/Shipment/ShipmentItem";
import { Box, Container, List } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Bidding from "../types/Bidding";
import { useGlobalState } from "../components/GlobalStateProvider";

function ShipmentItems(props: {
  items: Bidding[];
  view: String;
  setItems: Function;
}) {
  return (
    <>
      {props.items.map((item: Bidding) => (
        <ShipmentItem
          key={item.id as React.Key}
          item={item}
          view={props.view}
          setItems={props.setItems}
        />
      ))}
    </>
  );
}

export default function ShipmentActive() {
  const [items, setItems] = useState<Bidding[]>([]);
  const { state } = useGlobalState();
  const view = "Biddings";

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/biddings/`, {
        headers: {
          Authorization: `Bearer ${state.accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((reponse) => setItems(reponse.data));
  }, [state.accessToken]);

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#fafafa", height: "100vh", p: 2 }}>
          <List>
            {items && (
              <ShipmentItems items={items} view={view} setItems={setItems} />
            )}
          </List>
        </Box>
      </Container>
    </>
  );
}
