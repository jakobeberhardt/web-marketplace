import * as React from "react";
import { ShipmentTable } from "./ShipmentTable";
import { Box, Container, List } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Bidding from "../../types/Bidding";
import { useGlobalState } from "../GlobalStateProvider";

function ShipmentItems(props: { items: Bidding[]; view: String }) {
  return (
    <>
      {props.items.map((item: Bidding) => (
        <ShipmentTable item={item} view={props.view} />
      ))}
    </>
  );
}

export function ShipmentContainer() {
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
          <List>{items && <ShipmentItems items={items} view={view} />}</List>
        </Box>
      </Container>
    </>
  );
}
