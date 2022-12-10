import { LocalShipping } from "@mui/icons-material";
import Bidding from "../../types/Bidding";

export default function Requirements(props: { item: Bidding }) {
  const iconMap = new Map<string, JSX.Element>([
    ["boxtrailer", <LocalShipping />],
    ["cleanedVehicle", <></>],
    ["craneLoadable", <></>],
    ["emptyVehicle", <></>],
    ["fireExtinguisher", <></>],
    ["foodStuffs", <></>],
    ["healthCert", <></>],
    ["keepDry", <></>],
    ["loadHeight", <></>],
    ["loadWidth", <></>],
    ["loadLength", <></>],
    ["mobileForklift", <></>],
    ["palletSwap", <></>],
    ["ppeFfp2Mask", <></>],
    ["ppeHelmet", <></>],
    ["ppeShoes", <></>],
    ["sideLoadable", <></>],
    ["tailLift", <></>],
    ["trackingLevel", <></>],
    ["wasteSign", <></>],
    ["whitelabelVehicle", <></>],
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
              <div>
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
