import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "react-testing-library";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
