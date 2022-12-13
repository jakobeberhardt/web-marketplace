import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import Bidding from "../../types/Bidding";
import { useGlobalState } from "../GlobalStateProvider";

export default function UserSidebar(props: {}) {
  const { state } = useGlobalState();
  return (
    <>
      {state.userId && (
        <Card
          sx={{ marginLeft: "30px", marginRight: "30px", borderRadius: "10px" }}
        >
          <CardHeader />
          <CardContent>
            <Typography variant="body2">
              <>User: {state.userId}</>
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}
