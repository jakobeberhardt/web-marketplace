import * as React from "react";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import Bidding from "../../types/Bidding";

export function DischargeLoc(props: { item: Bidding }) {
  return (
    <>
      <Card
        sx={{
          mt: "30px",
          mb: "30px",
          ml: "30px",
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <div style={{ borderColor: "black", borderWidth: "4px" }}>
            <Typography sx={{ fontSize: 20 }} color="black" gutterBottom>
              Entladeort
            </Typography>
            <Divider />
          </div>

          <Typography style={{ paddingTop: "15px" }}>Referenz:</Typography>
          <Typography
            sx={{
              bgcolor: "#e3e3e3",
              borderRadius: "10px",
              padding: "5px",
              margin: "5px",
            }}
            variant="body2"
          >
            {props.item.shipment.deliveryReference}
          </Typography>

          <Typography style={{ paddingTop: "15px" }}>Status:</Typography>
          <Typography
            sx={{
              bgcolor: "#e3e3e3",
              borderRadius: "10px",
              padding: "5px",
              margin: "5px",
            }}
            variant="body2"
          >
            <>PLZ: {props.item.shipment.delivery.station.address?.zipcode}</>
          </Typography>
          <Typography
            sx={{
              bgcolor: "#e3e3e3",
              borderRadius: "10px",
              padding: "5px",
              margin: "5px",
            }}
            variant="body2"
          >
            Stadt: {props.item.shipment.delivery.station.address?.city}
          </Typography>
          <Typography
            sx={{
              bgcolor: "#e3e3e3",
              borderRadius: "10px",
              padding: "5px",
              margin: "5px",
            }}
            variant="body2"
          >
            <>
              Beladezeit (Anfang):{" "}
              {props.item.shipment.delivery.allowedTimeWindows[0].startTime}
            </>
          </Typography>
          <Typography
            sx={{
              bgcolor: "#e3e3e3",
              borderRadius: "10px",
              padding: "5px",
              margin: "5px",
            }}
            variant="body2"
          >
            <>
              Beladezeit (Ende):{" "}
              {props.item.shipment.delivery.allowedTimeWindows[0].endTime}
            </>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
