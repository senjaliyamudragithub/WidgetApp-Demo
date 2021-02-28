import Main from "./Main";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";

describe("Main component", () => {
  afterEach(cleanup);
  it("renders", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Main />
      </Router>
    );
    expect(screen.getByText(/Dashboard/)).toBeInTheDocument();
    expect(screen.getByText(/Add Widget/)).toBeInTheDocument();
  });
});
