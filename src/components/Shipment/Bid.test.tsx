import React from "react";
import { render, screen } from "@testing-library/react";
import { Bid } from "./Bid";
import BidClass from "../../types/Bid";
import Bidding from "../../types/Bidding";

test("Wenn ein Gebot abgegeben wurde, dann sehe ich den Input nicht.", () => {
  const setItems = () => {};
  const biddingID = "1";
  const items: BidClass[] = [
    { id: "123", userId: "456", value: 500.0, currency: "Euro" },
  ];
  const biddingItems: Bidding[] = [];
  render(
    <Bid
      setItems={setItems}
      biddingID={biddingID}
      items={items}
      biddingItems={biddingItems}
    />
  );
  expect(screen.queryByTestId("bidInput")).toBeNull();
});

test("Wenn kein Gebot abgegeben wurde, dann sehe ich den Input.", () => {
  const setItems = () => {};
  const biddingID = "1";
  const items: BidClass[] = [];
  const biddingItems: Bidding[] = [];
  render(
    <Bid
      setItems={setItems}
      biddingID={biddingID}
      items={items}
      biddingItems={biddingItems}
    />
  );
  expect(screen.getByTestId("bidInput")).toBeInTheDocument();
});
