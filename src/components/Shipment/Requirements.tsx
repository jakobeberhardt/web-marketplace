import {
  LocalShipping,
  HealthAndSafety,
  FormatColorReset,
  Height,
  Engineering,
  Masks,
} from "@mui/icons-material";
import Bidding from "../../types/Bidding";

import GPS from "../../assets/icons/png/gps.png";
import Restaurant from "../../assets/icons/png/restaurant.png";
import Logistics from "../../assets/icons/png/logistics.png";
import EmptyTruck from "../../assets/icons/png/006-truck-1.png";
import Clean from "../../assets/icons/png/clean.png";
import Swap from "../../assets/icons/png/015-swap.png";
import Boxes from "../../assets/icons/png/004-boxes.png";
import Width from "../../assets/icons/png/012-arrows.png";

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
import FireExtinguisher from "@mui/icons-material/FireExtinguisher";

import icons from "./../../assets/icons/selection.json";
import IcomoonReact from "icomoon-react";

export default function Requirements(props: { item: Bidding }) {
  const iconMap = new Map<string, JSX.Element>([
    [
      "boxtrailer",
      <IcomoonReact
        iconSet={icons}
        color="black"
        size={100}
        icon="BOX_TRAILER"
      />,
    ],
    ["cleanedVehicle", <Clean />],
    [
      "craneLoadable",
      <IcomoonReact
        iconSet={icons}
        color="black"
        size={100}
        icon="CRANE_LOADABLE"
      />,
    ],
    [
      "emptyVehicle",
      <IcomoonReact
        iconSet={icons}
        color="black"
        size={100}
        icon="EMPTY_VEHICLE"
      />,
    ],
    [
      "fireExtinguisher",
      <IcomoonReact iconSet={icons} color="black" size={100} icon="" />,
    ],
    [
      "foodStuffs",
      <IcomoonReact
        iconSet={icons}
        color="black"
        size={100}
        icon="FOODSTUFFS"
      />,
    ],
    [
      "healthCert",
      <IcomoonReact iconSet={icons} color="black" size={100} icon="" />,
    ],
    [
      "keepDry",
      <IcomoonReact iconSet={icons} color="black" size={100} icon="" />,
    ],
    [
      "loadHeight",
      <IcomoonReact
        iconSet={icons}
        color="black"
        size={100}
        icon="LOAD_HEIGHT"
      />,
    ],
    [
      "loadWidth",
      <IcomoonReact
        iconSet={icons}
        color="black"
        size={100}
        icon="LOAD_WIDTH"
      />,
    ],
    [
      "loadLength",
      <IcomoonReact iconSet={icons} color="black" size={100} icon="" />,
    ],
    [
      "mobileForklift",
      <IcomoonReact
        iconSet={icons}
        color="black"
        size={100}
        icon="MOBILE_FORKLIFT"
      />,
    ],
    [
      "palletSwap",
      <IcomoonReact
        iconSet={icons}
        color="black"
        size={100}
        icon="PALLET_SWAP"
      />,
    ],
    [
      "ppeFfp2Mask",
      <IcomoonReact iconSet={icons} color="black" size={100} icon="" />,
    ],
    [
      "ppeHelmet",
      <IcomoonReact iconSet={icons} color="black" size={100} icon="" />,
    ],
    [
      "ppeShoes",
      <IcomoonReact iconSet={icons} color="black" size={100} icon="" />,
    ],
    [
      "sideLoadable",
      <IcomoonReact
        iconSet={icons}
        color="black"
        size={100}
        icon="SIDE_LOADABLE"
      />,
    ],
    [
      "tailLift",
      <IcomoonReact
        iconSet={icons}
        color="black"
        size={100}
        icon="TAIL_LIFT"
      />,
    ],
    [
      "trackingLevel",
      <IcomoonReact iconSet={icons} color="black" size={100} icon="" />,
    ],
    [
      "wasteSign",
      <IcomoonReact iconSet={icons} color="black" size={100} icon="" />,
    ],
    [
      "whitelabelVehicle",
      <IcomoonReact iconSet={icons} color="black" size={100} icon="" />,
    ],
  ]);

  return (
    <>
      <div>
        {Object.entries(props.item.shipment.requirements).map((element) => (
          <>
            {/* Gib was leeres zurück, wenn das Requirement null ist */}
            {!element[1] && <></>}
            {/* Gib das Icon + Scopes zurück, wenn das Requirement gesetzt ist */}
            {!!element[1] && (
              <div
                style={{
                  padding: "10px",
                  borderRadius: "15px",
                  backgroundColor: "yellow",
                }}
              >
                {/* Icon */}
                <div>{iconMap.get(element[0])}</div>
                {/* Scope */}
                <div>{element[1].scopes}</div>
                <div style={{ backgroundColor: "red" }}>
                  {(element[1].scopes = "ENROUTE")}
                </div>
                {/* Params bei IntRequirement z.B Ladehöhe in m */}
                <div>{element[1].params}</div>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
}
/*
 <List>
                  <ListItem>
                    <div style={{ backgroundColor: "green" }}>
                      {" "}
                      {props.item.shipment.totalLoadMeters?.toString()} icon
                    </div>
                    <div style={{ backgroundColor: "yellow" }}>
                      {" "}
                      {props.item.shipment.totalLoadMeters?.toString()} icon
                    </div>
                    <div style={{ backgroundColor: "orange" }}>
                      {" "}
                      {props.item.shipment.totalLoadMeters?.toString()} icon
                    </div>
                  </ListItem>
                </List>

                */
