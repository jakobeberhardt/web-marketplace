import React from "react";
import { render, screen } from "@testing-library/react";
import Allowlist from "./Whitelist";

test("Ich sehe immer einen Input und Button zum Hinzufügen eines Users zu meinem Bieterkreis", () => {
  render(<Allowlist />);
  const userInput = screen.getByTestId("userInput");
  expect(userInput).toBeInTheDocument();
});

test("Ich sehe den Button zum Löschen von Nutzern auf dem Bieterkreis nicht, wenn ich keinen Nutzer ausgewählt habe", () => {
  render(<Allowlist />);
  expect(screen.queryByTestId("deleteButton")).toBeNull();
});
