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
      {/* 
      <div>
        {Object.entries(props.item.shipment.requirements).map((element) => (
          <>
            {(() => {
              const options = element;
              //22 anforderungen gibt es
              for (let i = 0; i < 22; i++) {
                options.push(
                  <div>
                    <div>{!element[i]}</div>
                    <div>{iconMap.get(element[i])}</div>
                    <div>{element[i].scopes}</div>
                    <div>{element[i].params}</div>
                  </div>
                );
              }

              return options;
            })()}
          </>
        ))}
      </div >
          */}
    </>
  );
}

/*
                  <div key={index}>{!!element[]}</div>
                      <div key={index}>{iconMap.get(element[index])}</div>
                      <div key={index}>{element[index].scopes}</div>
                      <div key={index}>{element[index].params}</div>
                
                
                
                for (let i of element) {
    const item =element[i]
              content.push(<li key={item.id}>{item.animal}</li>);
          
}




        if (props.item.shipment.requirements[].toString().length > 0) {
            
   const someObj:ObjectType = data;
const field = 'username';

// This gives an error
const temp = someObj[field];

// Solution 1: When the type of the object is known
const temp = someObj[field as keyof ObjectType]



    if (
        requirements-array is not empty
      ) {
        then render icon,scope,param elemente 
    }
    

             
                */
