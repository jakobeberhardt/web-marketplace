import * as React from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import SyncIcon from "@mui/icons-material/Sync";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import ScaleIcon from "@mui/icons-material/Scale";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import SendIcon from "@mui/icons-material/Send";
import SpaceBarIcon from "@mui/icons-material/SpaceBar";
import HeightIcon from "@mui/icons-material/Height";

import { Card, CardContent, Typography } from "@mui/material";
import Bidding from "../../types/Bidding";

export function Details(props: { item: Bidding }) {
  return (
    <>
      <Card
        sx={{ mt: "30px", mb: "30px", borderRadius: "10px" }}
        data-testid="detailView"
      >
        <CardContent>
          <Typography variant="body2">
            <>
              Anzahl: {props.item.shipment.totalItemCount} <br />
              Gewicht: {props.item.shipment.totalWeight}
              <br />
              Idm: {props.item.shipment.totalLoadMeters}
              <br />
              Quadratmeter: {props.item.shipment.totalVolume}
              <br />
            </>
          </Typography>
          <LocationOnIcon />
          <TrendingFlatIcon />
          <CoronavirusIcon />
          <SyncIcon />
          <FoodBankIcon />
          <ScaleIcon />
          <ViewInArIcon />
          <SendIcon />
          <SpaceBarIcon />
          <HeightIcon />
        </CardContent>
      </Card>{" "}
    </>
  );
}
