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
  Button,
} from "@mui/material";
import { ExpandLess, ExpandMore, AccessTime } from "@mui/icons-material";
import Bidding from "../../types/Bidding";
import { Bid } from "./Bid/Bid";
import Moment from "react-moment";

import ScaleIcon from "@mui/icons-material/Scale";
import AspectRatio from "@mui/icons-material/AspectRatio";
import Straighten from "@mui/icons-material/Straighten";
import { BidsActive } from "./Bids/BidsActive";
import { BidFinished } from "./Bid/BidFinished";
import { BidsFinished } from "./Bids/BidsFinished";
import { BidsRevoked } from "./Bids/BidsRevoked";
import { useGlobalState } from "../GlobalStateProvider";
import axios from "axios";
import icons from "./../../assets/icons/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

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

  const { state } = useGlobalState();

  Moment.globalLocale = "de";

  const changeBiddingState = (biddingID: String, status: String) => {
    const data = {
      biddingId: biddingID,
      newStatus: status,
    };
    const statusGet = status === "active" ? "paused" : "active";
    const headers = {
      Authorization: `Bearer ${state.accessToken}`,
      "Content-Type": "application/json",
    };
    axios
      .put(
        `${process.env.REACT_APP_API_URL_LOCAL_AUTH}/api/v1/biddings/status`,
        data,
        {
          headers: headers,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          axios
            .get(
              `${process.env.REACT_APP_API_URL_LOCAL_AUTH}/api/v1/biddings/${statusGet}/`,
              {
                headers: {
                  Authorization: `Bearer ${state.accessToken}`,
                  "Content-Type": "application/json",
                },
              }
            )
            .then((getreponse) => props.setItems(getreponse.data));
        }
      });
  };

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
        <ListItemButton onClick={handleClick} role="button">
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
          {(props.view === "OffersActive" ||
            props.view === "OffersFinished") && (
            <Typography
              data-testid="offerView"
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
          {(props.view === "BiddingsActive" ||
            props.view === "BiddingsFinished" ||
            props.view === "BiddingsRevoked") && (
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
          <div>
            {props.view === "BiddingsActive" && (
              <Button
                sx={{
                  background: "grey",
                  "&:hover": {
                    background: "#1976d2",
                  },
                  color: "white",
                  fontSize: "small",
                  marginRight: "15px",
                }}
                onClick={() => changeBiddingState(props.item.id, "paused")}
              >
                Auktion pausieren
              </Button>
            )}
          </div>
          <div>
            {props.view === "BiddingsRevoked" && (
              <Button
                sx={{
                  backgroundColor: "grey",
                  color: "white",
                  fontSize: "small",
                  marginRight: "15px",
                }}
                onClick={() => changeBiddingState(props.item.id, "active")}
              >
                Auktion erneut aufnehmen
              </Button>
            )}
          </div>

          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <div className="quickinfo" style={{ backgroundColor: "#FFFFFF" }}>
          {" "}
          <Grid container justifyContent="center" style={{ padding: "20px" }}>
            <Grid xs={3} style={{ marginRight: "20px" }} item={true}>
              <Typography style={{ fontWeight: "600" }}>Von:</Typography>
              <div>{props.item.shipment.pickup.station.name}</div>
              <div>{`${props.item.shipment.pickup.station.address?.zipcode} ${props.item.shipment.pickup.station.address?.city} ${props.item.shipment.pickup.station.address?.country}`}</div>
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
              <div>{`${props.item.shipment.delivery.station.address?.zipcode} ${props.item.shipment.delivery.station.address?.city} ${props.item.shipment.delivery.station.address?.country}`}</div>
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
            {/*TODO: List in Requirements.tsx einfügen & an Logik anbinden*/}
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
                    backgroundColor: "lightgrey",
                    padding: "7px",
                    margin: "5px",
                    borderRadius: "25px",
                    width: "40px",
                  }}
                >
                  <IcomoonReact
                    iconSet={icons}
                    color="black"
                    size={100}
                    icon="BOX_TRAILER"
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
            {props.view === "OffersActive" && (
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
            {(props.view === "OffersFinished" ||
              props.view === "OffersPaused") && (
              <div>
                <CardHeader
                  title="Damaliges Gebot"
                  data-testid="detailView"
                  style={{
                    backgroundColor: "#3A9B57",
                    color: "white",
                    fontWeight: "700",
                    display: "flex",
                  }}
                />
                <BidFinished
                  items={props.item.bids}
                  biddingID={props.item.id}
                />
              </div>
            )}
            {props.view === "BiddingsActive" && (
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
                <BidsActive items={props.item.bids} setItems={props.setItems} />
              </div>
            )}
            {props.view === "BiddingsFinished" && (
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
                <BidsFinished items={props.item.bids} />
              </div>
            )}
            {props.view === "BiddingsRevoked" && (
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
                <BidsRevoked items={props.item.bids} />
              </div>
            )}
          </Card>
        </Collapse>
      </List>
    </>
  );
}
