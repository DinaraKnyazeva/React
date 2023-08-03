import React from "react";
import "../style/App.scss";

export default class Tariff extends React.Component {
  render() {
    const { name, price, speed, isSelected, bgcolor, bgcolorlight } =
      this.props;
    return (
      <div
        className={"cards__inner" + (isSelected === true ? " selected" : "")}
      >
        <div className={`cards__title ${bgcolorlight}`}>
          <p
            className={
              "cards__title-text" + (isSelected === true ? " height" : "")
            }
          >
            {name}
          </p>
        </div>
        <div className={`cards__price-box ${bgcolor}`}>
          <div className="cards__price-ru">руб</div>
          <div className="cards__price-sum">{price}</div>
          <div className="cards__price-m">/мес</div>
        </div>
        <div className="cards__speed">
          <p className="cards__speed-text">{speed}</p>
        </div>
        <div className="cards__info">
          <p className="cards__info-text">
            Объем включенного трафика не ограничен
          </p>
        </div>
      </div>
    );
  }
}
