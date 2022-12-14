import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("Die Home Ansicht zeigt den gewollten Text", () => {
  render(<Home />);

  const greeting = screen.getByText(
    /Willkommen auf dem NeoCargo Bieterportal/i
  );
  expect(greeting).toBeInTheDocument();
});
