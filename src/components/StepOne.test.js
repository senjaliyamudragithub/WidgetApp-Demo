import React from "react";
import { render, cleanup } from "@testing-library/react";
import { toBeVisible } from "@testing-library/jest-dom/matchers";

import StepOne from "./StepOne";

expect.extend({ toBeVisible });

describe("StepOne", () => {
  afterEach(cleanup);

  it("renders", () => {
    const { queryByText } = render(
      <StepOne language="" onLangChange={() => {}} />
    );
    expect(queryByText("Select the language")).toBeVisible();
  });
});
