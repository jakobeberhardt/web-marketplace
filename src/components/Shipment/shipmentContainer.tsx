import * as React from "react";
import { ShipmentTable } from "./ShipmentTable";
import { Details } from "./Details";
import { DischargeLoc } from "./DischargeLoc";
import LoadingLoc from "./LoadingLoc";
import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Bidding from "../../types/Bid";
import { useGlobalState } from "./../GlobalStateProvider";

export function ShipmentContainer() {
  const [items, setItems] = useState<Bidding[]>([]);
  const { state } = useGlobalState();

  useEffect(() => {
    axios
      .get("https://api.jeberhardt.dev/biddings/", {
        headers: {
          Authorization: `Bearer ${props.accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((data) => setItems(data.data));
  }, [props.accessToken]);

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#fafafa", height: "100vh", p: 2 }}>
          <ShipmentTable>
            {items && <LoadingLoc items={items} /> && (
                <DischargeLoc items={items} />
              ) && <Details items={items} />}
          </ShipmentTable>
        </Box>
      </Container>
    </>
  );
}
