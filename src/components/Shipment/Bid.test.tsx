import React from "react";
import { render, screen } from "@testing-library/react";
import { Bid } from "./Bid";
import BidClass from "../../types/Bid";

test("Wenn ein Gebot abgegeben wurde, dann sehe ich den Input nicht.", () => {
  const setItems = () => {};
  const biddingID = "1";
  const items: BidClass[] = [{ id: "123", userId: "456", value: 500.0 }];
  render(<Bid setItems={setItems} biddingID={biddingID} items={items} />);
  expect(screen.queryByTestId("bidInput")).toBeNull();
});

test("Wenn kein Gebot abgegeben wurde, dann sehe ich den Input.", () => {
  const setItems = () => {};
  const biddingID = "1";
  const items: BidClass[] = [];
  render(<Bid setItems={setItems} biddingID={biddingID} items={items} />);
  expect(screen.getByTestId("bidInput")).toBeInTheDocument();
});
