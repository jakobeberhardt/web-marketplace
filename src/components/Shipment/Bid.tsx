import { Card, CardContent } from "@mui/material";

export function Bid() {
  return (
    <>
      <Card /* key={props.item.id as React.Key} */
        sx={{
          mt: "30px",
          mb: "30px",
          mr: "30px",
          borderRadius: "10px",
        }}
      >
        <CardContent></CardContent>
      </Card>
    </>
  );
}
