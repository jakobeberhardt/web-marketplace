import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import Bidding from "../../types/Bidding";

export default function UserSidebar(props: {}) {
  return (
    <>
      <Card
        sx={{ marginLeft: "30px", marginRight: "30px", borderRadius: "10px" }}
      >
        <CardHeader />
        <CardContent>
          <Typography variant="body2">
            <>
              User: <br />
            </>
          </Typography>
        </CardContent>
      </Card>{" "}
    </>
  );
}
