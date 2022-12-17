import React from "react";
import { render, screen } from "@testing-library/react";
import Allowlist from "./Whitelist";

test("Ich sehe immer einen Input und Button zum Hinzufügen eines Users zu meinem Bieterkreis", () => {
  render(<Allowlist />);
  const userInput = screen.getByRole("listitem");
  expect(userInput).toBeInTheDocument();
});
