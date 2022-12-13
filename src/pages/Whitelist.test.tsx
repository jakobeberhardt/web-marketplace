import React from "react";
import { render, screen } from "@testing-library/react";
import Whitelist from "./Whitelist";

test("Ich sehe immer einen Input und Button zum Hinzufügen eines Users zu meinem Bieterkreis", () => {
  render(<Whitelist />);
  const userInput = screen.getByRole("listitem");
  expect(userInput).toBeInTheDocument();
});
