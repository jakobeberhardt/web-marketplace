import * as React from "react";

import Offer from "./Offer";
import Requirements from "./Requirements";
import {
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
  Button,
  ListItem,
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

import ScaleIcon from "@mui/icons-material/Scale";
import AspectRatio from "@mui/icons-material/AspectRatio";
import Straighten from "@mui/icons-material/Straighten";

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
          alignItems: "center",
          marginBottom: "15px",
        }}
        component="nav"
      >
        <ListItemButton onClick={handleClick}>
          <Typography sx={{ mr: "20px", fontWeight: "700" }}>
            Sendung:{" "}
          </Typography>
          <ListItemText primary={props.item.shipment.id} />

          <Straighten />
          <div style={{ marginRight: "30px", marginLeft: "10px" }}>
            {props.item.shipment.totalLoadMeters?.toString()} ldm
          </div>
          <ScaleIcon />

          <div style={{ marginRight: "30px", marginLeft: "10px" }}>
            {props.item.shipment.totalWeight?.toString()} kg
          </div>
          <AspectRatio />
          <div style={{ marginRight: "30px", marginLeft: "10px" }}>
            {props.item.shipment.totalVolume?.toString()} m³
          </div>
          <Typography
            sx={{
              backgroundColor: "#1E90FF",
              color: "white",
              padding: "7px 10px 7px 10px",
              borderRadius: "25px",
              marginRight: "15px",
            }}
          >
            Gebote: xxx
          </Typography>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <div className="quickinfo" style={{ backgroundColor: "#FFFFFF" }}>
          {" "}
          <Grid container justifyContent="center" style={{ padding: "20px" }}>
            <Grid xs={3} style={{ marginRight: "20px" }}>
              <Typography style={{ fontWeight: "600" }}>Von:</Typography>
              <div>{props.item.shipment.pickup.station.name}</div>
              <div>
                {props.item.shipment.pickup.allowedTimeWindows.map(
                  (element) => (
                    <>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: "small",
                          paddingTop: "10px",
                        }}
                      >
                        <AccessTime
                          style={{
                            width: "15px",
                            height: "15px",
                          }}
                        />{" "}
                        <Moment
                          date={element.startTime}
                          format="DD. MMM,  hh:mm [Uhr - ]"
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: "small",
                        }}
                      >
                        {" "}
                        <AccessTime
                          style={{
                            width: "15px",
                            height: "15px",
                          }}
                        />{" "}
                        <Moment
                          date={element.endTime}
                          format="DD. MMM,  hh:mm [Uhr]"
                        />
                      </div>
                    </>
                  )
                )}
              </div>
            </Grid>

            <Grid xs={3} style={{ marginLeft: "20px", marginRight: "20px" }}>
              <Typography style={{ fontWeight: "600" }}>Nach:</Typography>
              <div>{props.item.shipment.delivery.station.name}</div>
              <div>
                {props.item.shipment.delivery.allowedTimeWindows.map(
                  (element) => (
                    <>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: "small",
                          paddingTop: "10px",
                        }}
                      >
                        <AccessTime
                          style={{
                            width: "15px",
                            height: "15px",
                          }}
                        />
                        <Moment
                          date={element.startTime}
                          format="DD. MMM,  hh:mm [Uhr - ]"
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: "small",
                        }}
                      >
                        {" "}
                        <AccessTime
                          style={{
                            width: "15px",
                            height: "15px",
                          }}
                        />{" "}
                        <Moment
                          date={element.endTime}
                          format="DD. MMM,  hh:mm [Uhr]"
                        />
                      </div>
                    </>
                  )
                )}
              </div>
            </Grid>
            {/*TODO: List in Requirements.tsx einfügen &an Logik anbinden*/}

            <Grid xs={3} style={{ marginLeft: "20px" }}>
              <Typography style={{ fontWeight: "600" }}>
                {" "}
                Anforderungen:
              </Typography>
              <div
                style={{ display: "flex", flexWrap: "wrap", paddingLeft: "0" }}
              >
                <div
                  style={{
                    backgroundColor: "green",
                    padding: "7px",
                    margin: "5px",
                    borderRadius: "25px",
                    width: "40px",
                  }}
                >
                  <ScaleIcon
                    style={{
                      margin: "auto",
                      display: "flex",
                      minWidth: "15px",
                      minHeight: "15px",
                      maxWidth: "20px",
                      maxHeight: "20px",
                    }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "yellow",
                    padding: "7px",
                    margin: "5px",
                    borderRadius: "25px",
                    width: "40px",
                  }}
                >
                  {" "}
                  <ScaleIcon
                    style={{
                      margin: "auto",
                      display: "flex",
                      minWidth: "15px",
                      minHeight: "15px",
                      maxWidth: "20px",
                      maxHeight: "20px",
                    }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "orange",
                    padding: "7px",
                    margin: "5px",
                    borderRadius: "25px",
                    width: "40px",
                  }}
                >
                  {" "}
                  <ScaleIcon
                    style={{
                      margin: "auto",
                      display: "flex",
                      minWidth: "15px",
                      minHeight: "15px",
                      maxWidth: "20px",
                      maxHeight: "20px",
                    }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "orange",
                    padding: "7px",
                    margin: "5px",
                    borderRadius: "25px",
                    width: "40px",
                  }}
                >
                  {" "}
                  <ScaleIcon
                    style={{
                      margin: "auto",
                      display: "flex",
                      minWidth: "15px",
                      minHeight: "15px",
                      maxWidth: "20px",
                      maxHeight: "20px",
                    }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "orange",
                    padding: "7px",
                    margin: "5px",
                    borderRadius: "25px",
                    width: "40px",
                  }}
                >
                  {" "}
                  <ScaleIcon
                    style={{
                      margin: "auto",
                      display: "flex",
                      minWidth: "15px",
                      minHeight: "15px",
                      maxWidth: "20px",
                      maxHeight: "20px",
                    }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "orange",
                    padding: "7px",
                    margin: "5px",
                    borderRadius: "25px",
                    width: "40px",
                    float: "left",
                  }}
                >
                  {" "}
                  <ScaleIcon
                    style={{
                      margin: "auto",
                      display: "flex",
                      minWidth: "15px",
                      minHeight: "15px",
                      maxWidth: "20px",
                      maxHeight: "20px",
                    }}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        <Collapse
          sx={{ borderCollapse: "separate" }}
          in={open}
          timeout="auto"
          unmountOnExit
        >
          <List
            sx={{
              width: "100%",
              maxWidth: "100%",
              bgcolor: "#ffffff",
            }}
            component="div"
            disablePadding
          >
            <Grid container justifyContent="center" style={{ padding: "20px" }}>
              <Grid xs={9}>
                {props.view === "Offers" && (
                  <Bid items={props.item.bids} setItems={props.setItems} />
                )}
              </Grid>
              <Grid xs={9}>
                {props.view === "Biddings" && (
                  <Bids items={props.item.bids} setItems={props.setItems} />
                )}
              </Grid>
            </Grid>
          </List>
        </Collapse>
      </List>
    </>
  );
}
