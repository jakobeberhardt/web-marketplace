import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import Bidding from "../types/Bidding";

export default function PopupDelete(props: {}) {
  return (
    <>
      <Card sx={{ mt: "30px", mb: "30px", borderRadius: "10px" }}>
        <CardHeader />
        <CardContent>
          <Typography variant="body2">
            <>Anzahl:</>
          </Typography>
        </CardContent>
      </Card>{" "}
    </>
  );
}
