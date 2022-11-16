import * as React from "react";

import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@mui/material";

export default function LoadingLoc() {
  return (
    <>
      {props.items.map((item: Bidding) => (
        <Card
          key={item.id as Key}
          sx={{
            mt: "30px",
            mb: "30px",
            mr: "30px",
            borderRadius: "10px",
          }}
        >
          <CardContent>
            <div style={{ borderColor: "black", borderWidth: "4px" }}>
              <Typography sx={{ fontSize: 20 }} color="black" gutterBottom>
                Beladeort: {item.shipment.pickupReference}
              </Typography>
              <Divider />
            </div>
            <Typography variant="h5" component="div"></Typography>

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
              PIK_70528130
            </Typography>
            <Typography style={{ paddingTop: "15px" }}>Status:</Typography>
            <Typography
              sx={{
                bgcolor: "#95ef5e",
                borderRadius: "10px",
                padding: "5px",
                margin: "5px",
              }}
              variant="body2"
            >
              Ankunft:
            </Typography>
            <Typography
              sx={{
                bgcolor: "#95ef5e",
                borderRadius: "10px",
                padding: "5px",
                margin: "5px",
              }}
              variant="body2"
            >
              Ladebeginn:
            </Typography>
            <Typography
              sx={{
                bgcolor: "#95ef5e",
                borderRadius: "10px",
                padding: "5px",
                margin: "5px",
              }}
              variant="body2"
            >
              Ladeende:
            </Typography>
            <Typography
              sx={{
                bgcolor: "#95ef5e",
                borderRadius: "10px",
                padding: "5px",
                margin: "5px",
              }}
              variant="body2"
            >
              Abfahrt:
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
