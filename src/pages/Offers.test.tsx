import React from "react";
import { render, screen } from "@testing-library/react";
import { Box, Container, List } from "@mui/material";
import { ShipmentItems } from "./Offers";
import biddings from "../components/mock-shipment.json";

test("Ich kann Shipments sehen, die für mich ausgeschrieben sind.", () => {
  const items = biddings;
  const view = "Offers";
  const setItems = () => {};

  render(
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "#fafafa", height: "100vh", p: 2 }}>
        <List>
          {items && (
            <ShipmentItems items={items} view={view} setItems={setItems} />
          )}
        </List>
      </Box>
    </Container>
  );
  const expandButton = screen.getByText("Testobjekt");
  expect(expandButton).toBeInTheDocument();
});
