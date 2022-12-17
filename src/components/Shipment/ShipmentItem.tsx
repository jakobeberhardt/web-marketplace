import React from "react";

import {
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
  Card,
  CardHeader,
} from "@mui/material";
import { ExpandLess, ExpandMore, AccessTime } from "@mui/icons-material";
import Bidding from "../../types/Bidding";
import { Bid } from "./Bid";
import Moment from "react-moment";

import ScaleIcon from "@mui/icons-material/Scale";
import AspectRatio from "@mui/icons-material/AspectRatio";
import Straighten from "@mui/icons-material/Straighten";
import { Bids } from "./Bids";

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
        key={props.item.id as React.Key}
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
          <ListItemText primary={props.item.shipment.tmsReference} />

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
          {props.view === "Offers" && (
            <Typography
              sx={{
                backgroundColor: "#1E90FF",
                color: "white",
                padding: "7px 10px 7px 10px",
                borderRadius: "25px",
                marginRight: "15px",
              }}
            >
              {props.item.bids.length > 0 && (
                <>{`Ihr Gebot: ${props.item.bids[0].value} €`}</>
              )}
              {props.item.bids.length === 0 && <>Kein Gebot abgegeben</>}
            </Typography>
          )}
          {props.view === "Biddings" && (
            <Typography
              sx={{
                backgroundColor: "#1E90FF",
                color: "white",
                padding: "7px 10px 7px 10px",
                borderRadius: "25px",
                marginRight: "15px",
              }}
            >
              Anzahl Gebote: {props.item.bids.length}
            </Typography>
          )}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <div className="quickinfo" style={{ backgroundColor: "#FFFFFF" }}>
          {" "}
          <Grid container justifyContent="center" style={{ padding: "20px" }}>
            <Grid xs={3} style={{ marginRight: "20px" }} item={true}>
              <Typography style={{ fontWeight: "600" }}>Von:</Typography>
              <div>{props.item.shipment.pickup.station.name}</div>
              <div>
                {props.item.shipment.pickup.allowedTimeWindows.map(
                  (element, index) => (
                    <>
                      <div
                        key={index}
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

            <Grid
              xs={3}
              style={{ marginLeft: "20px", marginRight: "20px" }}
              item={true}
            >
              <Typography style={{ fontWeight: "600" }}>Nach:</Typography>
              <div>{props.item.shipment.delivery.station.name}</div>
              <div>
                {props.item.shipment.delivery.allowedTimeWindows.map(
                  (element, index) => (
                    <>
                      <div
                        key={index}
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

            <Grid xs={3} style={{ marginLeft: "20px" }} item={true}>
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
          <Card
            style={{
              marginLeft: "12vh",
              marginRight: "12vh",
              marginTop: "4vh",
              marginBottom: "3vh",
              padding: "0",
              minHeight: "20vh",

              justifyContent: "center",
            }}
          >
            {props.view === "Offers" && (
              <div>
                <CardHeader
                  title="Auf Sendung bieten"
                  data-testid="detailView"
                  style={{
                    backgroundColor: "#3A9B57",
                    color: "white",
                    fontWeight: "700",
                    display: "flex",
                  }}
                />
                <Bid
                  items={props.item.bids}
                  setItems={props.setItems}
                  biddingID={props.item.id}
                />
              </div>
            )}
            {props.view === "Biddings" && (
              <div>
                <CardHeader
                  title="Gebote"
                  style={{
                    backgroundColor: "#3A9B57",
                    color: "white",
                    fontWeight: "700",
                    display: "flex",
                  }}
                />
                <Bids items={props.item.bids} setItems={props.setItems} />
              </div>
            )}
          </Card>
        </Collapse>
      </List>
    </>
  );
}
