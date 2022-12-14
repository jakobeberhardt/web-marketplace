import React from "react";
import { render, screen } from "@testing-library/react";
import BidClass from "../../../types/Bid";
import { BidsActive } from "./BidsActive";

test("Ich kann bei jedem Gebot den Button zum Zuschlag erteilen sehen", () => {
  const setItems = () => {};
  const items: BidClass[] = [
    { id: "123", userId: "456", value: 500.0, currency: "Euro" },
  ];

  render(<BidsActive setItems={setItems} items={items} />);
  const bidItem = screen.getByText("Zuschlag erteilen");
  expect(bidItem).toBeInTheDocument();
});

test("Ich kann den Wert und NutzerID von jedem Gebot sehen und es ist formattiert", () => {
  const setItems = () => {};
  const items: BidClass[] = [
    { id: "123", userId: "456", value: 500.0, currency: "Euro" },
  ];
  render(<BidsActive setItems={setItems} items={items} />);

  const bidValue = screen.getByTestId("offerValue");
  expect(bidValue.textContent).toBe("456: 500 €");
});

test("Ich kann den Wert von jedem Gebot sehen und es ist formattiert mit Nachkommastellen", () => {
  const setItems = () => {};
  const items: BidClass[] = [
    { id: "123", userId: "456", value: 500.5, currency: "Euro" },
  ];
  render(<BidsActive setItems={setItems} items={items} />);

  const bidValue = screen.getByTestId("offerValue");
  expect(bidValue.textContent).toBe("456: 500.5 €");
});
