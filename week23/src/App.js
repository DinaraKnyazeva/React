import React, { useState } from "react";
import "./style/App.css";
import Tariff from "./components/Tariff";
import json from "./data/tariffPlan.json";

export default function App() {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const handleTariffSelect = (tariff) => {
    setSelectedTariff(tariff);
  };

  return (
    <div>
      <div className="cards">
        {json.map((tariff) => (
          <Tariff
            key={tariff.name}
            name={tariff.name}
            price={tariff.price}
            speed={tariff.speed}
            isSelected={selectedTariff === tariff}
            bgcolor={tariff.bgcolor}
            bgcolorlight={tariff.bgcolorlight}
            onSelect={() => handleTariffSelect(tariff)}
          />
        ))}
      </div>
    </div>
  );
}
