import React from "react";
import { render } from "react-dom";
import SelectMenuComponent from "./lib/SelectMenuComponent/SelectMenuComponent";

const options = [
  { label: "Vente", value: "vente" },
  { label: "Achat", value: "achat" },
  { label: "Location", value: "location" },
  { label: "Location saisonnière", value: "location-saisonniere" },
];
const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <SelectMenuComponent options={options} />
  </div>
);

render(<App />, document.getElementById("root"));
