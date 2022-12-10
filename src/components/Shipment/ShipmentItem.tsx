import * as React from "react";

import LoadingLoc from "./LoadingLoc";
import { DischargeLoc } from "./DischargeLoc";
import { Details } from "./Details";
import Requirements from "./Requirements";
import {
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  ExpandLess,
  ExpandMore,
  AccessTime,
  LocalShipping,
} from "@mui/icons-material";
import Bidding from "../../types/Bidding";
import { Bids } from "./Bids";
import { Bid } from "./Bid";
import Moment from "react-moment";

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

  Moment.globalLocale = "de";

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
          <Typography sx={{ mr: "20px", fontWeight: "700" }}>
            Sendung:{" "}
          </Typography>
          <ListItemText primary={props.item.shipment.id} />
          <div>icon</div>

          <div style={{ marginRight: "20px" }}>
            {props.item.shipment.totalLoadMeters?.toString()} ldm
          </div>
          <div>icon</div>

          <div style={{ marginRight: "20px" }}>
            {props.item.shipment.totalWeight?.toString()} kg
          </div>
          <Typography sx={{ backgroundColor: "blue" }}>Gebote: xxx</Typography>
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
              <Grid xs={3}>
                <Typography>Von:</Typography>
                <div>{props.item.shipment.pickup.station.name}</div>
                <div>
                  {props.item.shipment.pickup.allowedTimeWindows.map(
                    (element) => (
                      <>
                        <AccessTime />
                        <Moment
                          date={element.startTime}
                          format="dddd, MMMM YY [um] hh:mm [Uhr]"
                        />
                        <div>bis</div>
                        <div>
                          <AccessTime />
                          <Moment
                            date={element.endTime}
                            format="dddd, MMMM YY [um] hh:mm [Uhr]"
                          />
                        </div>
                      </>
                    )
                  )}
                </div>
              </Grid>

              <Grid xs={3}>
                <Typography>Nach:</Typography>
                <div>{props.item.shipment.delivery.station.name}</div>
                <div>
                  {props.item.shipment.delivery.allowedTimeWindows.map(
                    (element) => (
                      <>
                        <AccessTime />
                        <Moment
                          date={element.startTime}
                          format="dddd, MMMM YY [um] hh:mm [Uhr]"
                        />
                        <div>bis</div>
                        <div>
                          <AccessTime />
                          <Moment
                            date={element.endTime}
                            format="dddd, MMMM YY [um] hh:mm [Uhr]"
                          />
                        </div>
                      </>
                    )
                  )}
                </div>
              </Grid>

              <Grid xs={3}>
                <Typography>Anforderungen:</Typography>
                <Requirements item={props.item} />
              </Grid>
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
                  <Bid items={props.item.bids} setItems={props.setItems} />
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
