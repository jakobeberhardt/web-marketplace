import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useGlobalState } from "../GlobalStateProvider";

export default function UserSidebar(props: { userName: String }) {
  const { state } = useGlobalState();

  return (
    <>
      {state.userId && (
        <Card
          sx={{ marginLeft: "30px", marginRight: "30px", borderRadius: "10px" }}
        >
          <CardHeader />
          <CardContent>
            <Typography
              component={"span"}
              variant="body2"
              style={{ fontWeight: "10000", fontSize: "40" }}
            >
              <>{`User: ${props.userName}`} </>
              <br />
              <>{`NeoCargo ID: 00000`}</>
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}
