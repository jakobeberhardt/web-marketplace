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

export default function Requirements(props: { item: Bidding }) {
  const iconMap = new Map<string, JSX.Element>([
    // ["boxtrailer", <LocalShipping />],
    // ["cleanedVehicle", <Clean />],
    // ["craneLoadable", <></>],
    // ["emptyVehicle", <EmptyTruck />],
    ["fireExtinguisher", <FireExtinguisher />],
    /*  ["foodStuffs", <FoodBankIcon />],
    ["healthCert", <HealthAndSafety />],
    ["keepDry", <FormatColorReset />],*/
    ["loadHeight", <HeightIcon />],
    /* ["loadWidth", <Width />],
    ["loadLength", <></>],
    ["mobileForklift", <Boxes />],
    ["palletSwap", <Swap />],
    ["ppeFfp2Mask", <Masks />],
    ["ppeHelmet", <Engineering />],
    ["ppeShoes", <></>],
    ["sideLoadable", <></>],
    ["tailLift", <></>],
    //["trackingLevel", <GPS />],
    ["wasteSign", <></>],
    ["whitelabelVehicle", <></>],*/
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
