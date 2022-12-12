import * as React from "react";

import LoadingLoc from "./LoadingLoc";
import { DischargeLoc } from "./DischargeLoc";
import { Details } from "./Details";
import {
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Bidding from "../../types/Bidding";
import { Bids } from "./Bids";
import { Bid } from "./Bid";

export function ShipmentItem(props: {
  item: Bidding;
  view: String;
  setItems: Function;
}) {
  const [open, setOpen] = React.useState(false);

  //toggle Function für die Sendung
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
          <ListItemText primary={props.item.shipment.id} />
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
                <Details item={props.item} />
              </Grid>
              <Grid xs={5}>
                <LoadingLoc item={props.item} />
              </Grid>
              <Grid xs={5}>
                <DischargeLoc item={props.item} />
              </Grid>
            </Grid>
            {props.view === "Offers" && (
              <>
                <Grid>
                  <Bid
                    biddingID={props.item.id}
                    items={props.item.bids}
                    setItems={props.setItems}
                  />
                </Grid>
              </>
            )}
            {props.view === "Biddings" && (
              <>
                <Grid>
                  <Bids items={props.item.bids} setItems={props.setItems} />
                </Grid>
              </>
            )}
          </List>
        </Collapse>
      </List>
    </>
  );
}
