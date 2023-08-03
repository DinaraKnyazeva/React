import React from "react";
import "./style/App.css";
import Tariff from "./components/Tariff";
import json from "./data/tariffPlan.json";

export default function App() {
  return (
    <div>
      <div className="cards">
        {json.map((tariff) => (
          <Tariff
            name={tariff.name}
            price={tariff.price}
            speed={tariff.speed}
            isSelected={tariff.isSelected}
            bgcolor={tariff.bgcolor}
            bgcolorlight={tariff.bgcolorlight}
          ></Tariff>
        ))}
      </div>
    </div>
  );
}
