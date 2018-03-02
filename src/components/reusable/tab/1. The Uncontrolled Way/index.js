import React from "react";
import { render } from "react-dom";
import Tabs from "./Tabs";
import Tab from "./Tab";

export const App = () => (
  <Tabs>
    <Tab value="banana" header="Banana Header">
      Banana
    </Tab>
    <Tab value="apple" header="Apple Header">
      Apple
    </Tab>
  </Tabs>
);
