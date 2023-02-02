import "./../styles.scss";
import React, { useContext } from "react";
import { FamilyContext } from "../App";

const Families = () => {
    const {families, setActiveFamily, activeFamily} = useContext(FamilyContext);
    return (
  <section className="header">
    <h1>Family Trees</h1>
    {families.map((family) => (
      <button
        className={`family-button ${
          family.familyName === activeFamily.familyName && "active"
        }`}
        key={family.familyName}
        onClick={() => setActiveFamily(family)}
      >
        {family.familyName}
      </button>
    ))}
  </section>);
};

export default Families