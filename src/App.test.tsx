import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import App from "./App";

describe("App", () => {
  it("renders without error", () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <App />
      </MockedProvider>
    );

    expect(
      screen.getByText("John Johnsons Cruisey Movie Monday")
    ).toBeInTheDocument();
  });
});