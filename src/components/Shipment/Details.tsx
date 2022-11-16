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
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import { Box, Card, CardContent, Container, Typography } from "@mui/material";

export function Details() {
  return (
    <>
      <Card sx={{ mt: "30px", mb: "30px", borderRadius: "10px" }}>
        <CardContent>
          <Typography variant="body2">
            Anzahl: <br />
            Gewicht: <br />
            Idm: <br />
            Quadratmeter:
            <br />
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
