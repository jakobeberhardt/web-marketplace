import * as React from "react";
import ShipmentTable from "./ShipmentTable";

import { Box, Container } from "@mui/material";

export default function ShipmentContainer() {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#fafafa", height: "100vh", p: 2 }}>
          <ShipmentTable />
        </Box>
      </Container>
    </>
  );
}
