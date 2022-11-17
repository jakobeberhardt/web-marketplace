import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@mui/material";

import { useState, useEffect, Key } from "react";
import Bidding from "../../types/Bidding";
import axios from "axios";
import { useGlobalState } from "./../GlobalStateProvider";

export function DischargeLoc(props: { item: Bidding }) {
  return (
    <>
      <Card
        sx={{
          mt: "30px",
          mb: "30px",
          ml: "30px",
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <div style={{ borderColor: "black", borderWidth: "4px" }}>
            <Typography sx={{ fontSize: 20 }} color="black" gutterBottom>
              Entladeort: {item.shipment.delivery.station.name}
            </Typography>
            <Divider />
          </div>

          <Typography style={{ paddingTop: "15px" }}>Referenz:</Typography>
          <Typography
            sx={{
              bgcolor: "#e3e3e3",
              borderRadius: "10px",
              padding: "5px",
              margin: "5px",
            }}
            variant="body2"
          >
            {item.shipment.deliveryReference}{" "}
          </Typography>

          <Typography style={{ paddingTop: "15px" }}>Status:</Typography>
          <Typography
            sx={{
              bgcolor: "#e3e3e3",
              borderRadius: "10px",
              padding: "5px",
              margin: "5px",
            }}
            variant="body2"
          >
            Ankunft:
          </Typography>
          <Typography
            sx={{
              bgcolor: "#e3e3e3",
              borderRadius: "10px",
              padding: "5px",
              margin: "5px",
            }}
            variant="body2"
          >
            Ladebeginn:
          </Typography>
          <Typography
            sx={{
              bgcolor: "#e3e3e3",
              borderRadius: "10px",
              padding: "5px",
              margin: "5px",
            }}
            variant="body2"
          >
            Ladeende:
          </Typography>
          <Typography
            sx={{
              bgcolor: "#e3e3e3",
              borderRadius: "10px",
              padding: "5px",
              margin: "5px",
            }}
            variant="body2"
          >
            Abfahrt:
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
