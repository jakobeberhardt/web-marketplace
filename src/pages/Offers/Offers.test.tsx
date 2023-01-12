import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Box, Container, List } from "@mui/material";
import { ShipmentItems } from "./OffersActive";
import biddings from "../../components/mock-shipment.json";

test("Ich kann Shipments sehen, die für mich ausgeschrieben sind.", () => {
  const items = biddings;
  const view = "OffersActive";
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

  fireEvent(
    screen.getByRole("button"),
    new MouseEvent("click", {
      bubbles: true,
    })
  );

  const detailView = screen.getByTestId("offerView");
  expect(detailView).toBeInTheDocument();
});
