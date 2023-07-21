import React from "react";
import "./style/App.css";
import Superheroes from "./components/Superheroes";
import json from "./data/superheroes";

class App extends React.Component {
  render() {
    console.log(json);
    return (
      <div className="cardSuperheroes__app">
        {json.map((heroes) => (
          <Superheroes
            name={heroes.name}
            url={heroes.url}
            universe={heroes.universe}
            alterego={heroes.alterego}
            occupation={heroes.occupation}
            friends={heroes.friends}
            superpowers={heroes.superpowers}
          ></Superheroes>
        ))}
      </div>
    );
  }
}

export default App;
