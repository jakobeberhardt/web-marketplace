import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useGlobalState } from "../GlobalStateProvider";

export default function UserSidebar(props: { userName: String }) {
  const { state } = useGlobalState();

  return (
    <>
      {state.userId && (
        <Card
          sx={{
            marginLeft: "30px",
            marginRight: "30px",
            borderRadius: "10px",
            borderStyle: "inset",
            borderColor: "green",
          }}
        >
          {/* <CardHeader
            sx={{
              textDecorationLine: "underline",
              alignItems: "center",
              margin: "auto",
              fontWeight: "700",
            }}
            title="Account:"
          /> */}
          <CardContent sx={{ padding: "20px" }}>
            <Typography
              component={"span"}
              variant="body2"
              style={{
                fontWeight: "10000",
                fontSize: "40",
                wordWrap: "break-word",
              }}
            >
              <span style={{ fontWeight: "bolder" }}>Benutzername:{"  "}</span>
              <span>{props.userName}</span>
              <br />
              <span style={{ fontWeight: "bolder" }}>NeoCargo-ID: </span>
              <span>{state.userId}</span>
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}
