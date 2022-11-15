import * as React from "react";
import ShipmentTable from "./ShipmentTable";

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

import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@mui/material";

export default function SendungUebersicht() {
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
              Entladeort
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
            DEL_52180246
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
      ;
    </>
  );
}
