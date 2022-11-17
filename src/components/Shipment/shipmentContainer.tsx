import * as React from "react";
import { ShipmentTable } from "./ShipmentTable";
import { Details } from "./Details";
import { DischargeLoc } from "./DischargeLoc";
import LoadingLoc from "./LoadingLoc";
import { Box, Container, List } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Bidding from "../../types/Bid";
import { useGlobalState } from "../GlobalStateProvider";

function ShipmentItems(props: { items: Bidding[] }) {
  return (
    <>
      {props.items.map((item: Bidding) => (
        <ShipmentTable item={item as Bidding} />
      ))}
    </>
  );
}

export function ShipmentContainer() {
  const [items, setItems] = useState<Bidding[]>([]);
  const { state } = useGlobalState();

  useEffect(() => {
    axios
      .get("https://api.jeberhardt.dev/biddings/", {
        headers: {
          Authorization: `Bearer ${state.accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((data) => setItems(data.data));
  }, [state.accessToken]);

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#fafafa", height: "100vh", p: 2 }}>
          <List>{items && <ShipmentItems items={items} />}</List>
        </Box>
      </Container>
    </>
  );
}
