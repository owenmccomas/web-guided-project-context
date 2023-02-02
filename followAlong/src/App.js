import React, { createContext, useState } from "react";

import { data } from "./data";

import Families from "./components/Families";
import FamilyTree from "./components/FamilyTree";
import "./styles.scss";

export const FamilyContext = createContext();

export default function App() {
  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);

  return (
    <div className="App">
      <FamilyContext.Provider value={{activeFamily: activeFamily, setActiveFamily: setActiveFamily, families: families}}>
      <Families/>
      {activeFamily && <FamilyTree family={activeFamily} />}
      </FamilyContext.Provider>

    </div>
  );
}