import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import Bidding from "../../types/Bidding";
import { useGlobalState } from "../GlobalStateProvider";

export default function UserSidebar(props: {}) {
  const { state } = useGlobalState();

  /* Unterscheiden des eingeloggten Users
    const [ "Bieter",
        "Anbieter"] = LoginStatus();
*/

  return (
    <>
      {state.userId && (
        <Card
          sx={{ marginLeft: "30px", marginRight: "30px", borderRadius: "10px" }}
        >
          <CardHeader />
          <CardContent>
            <Typography variant="body2" style={{ fontWeight: "700" }}>
              <>User: </>
            </Typography>
            <Typography variant="body2" style={{ fontSize: "x-small" }}>
              {state.userId}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}
