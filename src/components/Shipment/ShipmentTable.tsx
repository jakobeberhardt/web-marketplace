import * as React from "react";

import LoadingLoc from "./LoadingLoc";
import { DischargeLoc } from "./DischargeLoc";
import { Details } from "./Details";
import {
  Grid,
  CssBaseline,
  Container,
  ListItemIcon,
  List,
  ListItemButton,
  ListSubheader,
  ListItemText,
  Collapse,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SpaceBarIcon from "@mui/icons-material/SpaceBar";
import HeightIcon from "@mui/icons-material/Height";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import axios from "axios";
import Bidding from "../../types/Bid";
import { useGlobalState } from "./../GlobalStateProvider";

export function ShipmentTable(item: Bidding) {
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
                <Details item={item} />
              </Grid>
              <Grid xs={5}>
                <LoadingLoc item={item} />
              </Grid>
              <Grid xs={5}>
                <DischargeLoc item={item} />
              </Grid>
            </Grid>
          </List>
        </Collapse>
      </List>
    </>
  );
}
