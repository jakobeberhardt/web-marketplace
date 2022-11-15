import * as React from "react";

import Beladeort from "./Beladeort";
import Entladeort from "./Entladeort";
import SendungUebersicht from "./SendungUebersicht";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Box,
  Grid,
  CssBaseline,
  Container,
  ListItemIcon,
  List,
  ListItemButton,
  ListSubheader,
  ListItemText,
  Collapse,
  Card,
  CardActions,
  Button,
  CardContent,
  Divider,
} from "@mui/material";
import { useState, useEffect } from "react";
//import AllowedTimeWindow from '../types/AllowedTimeWindow';
//import Contract from '../types/Contracts';
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { spacing } from "@mui/system";

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

/*
function TableContent({ items }: any) {
  const [item, setItem] = useState([]);
  const [data, setData] = useState([]);

  //api call für die Bidding Objekte

  useEffect(() => {
    fetch("mock-shipment.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => console.log(res.json()))
      .then((items) => setItem(item));
  }, []);

  return (
    <div className="App">
      {data &&
        data.length > 0 &&
        data.map((item) => <p>{item.shipment.label}</p>)}
    </div>
  );
}
*/

export default function ShipmentTable() {
  const [open, setOpen] = React.useState(true);

  //toggle funktion für die Sendung
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          bgcolor: "#9ad6bd",
          borderRadius: "10px",
        }}
        component="nav"
      >
        <ListItemButton onClick={handleClick}>
          <SendIcon sx={{ mr: "20px" }} />
          <ListItemText primary="Sendung 14001" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            sx={{
              width: "100%",
              maxWidth: "100%",
              bgcolor: "#ffffff",
            }}
            component="div"
            disablePadding
          >
            <Grid container justifyContent="center">
              <Grid xs={10}>
                <SendungUebersicht />
              </Grid>
              <Grid xs={5}>
                <Beladeort />
              </Grid>
              <Grid xs={5}>
                <Entladeort />
              </Grid>
            </Grid>
          </List>
        </Collapse>
      </List>
    </>
  );
}
