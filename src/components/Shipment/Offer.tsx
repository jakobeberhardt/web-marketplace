import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import Bidding from "../../types/Bidding";

export function Offer(props: { item: Bidding }) {
  return (
    <>
      <Card sx={{ mt: "30px", mb: "30px", borderRadius: "10px" }}>
        <CardHeader />
        <CardContent>
          <Typography variant="body2">
            <>
              Anzahl: {props.item.shipment.totalItemCount} <br />
            </>
          </Typography>
        </CardContent>
      </Card>{" "}
    </>
  );
}
