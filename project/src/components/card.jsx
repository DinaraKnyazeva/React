import React from "react";
import "../style/App.scss";

export default class Card extends React.Component {
  render() {
    return (
      <div className="card-words__cards">
        <div className="card-words__word"></div>
        <div className="card-words__button-box">
          <button className="card-words__">Показать ответ</button>
          <div className="card-words__inner-repeat">
            <button className="card-words__10min">ч/з 10 мин. СНОВА</button>
            <button className="card-words__15min">ч/з 15 мин. ТРУДНО</button>
            <button className="card-words__1d">1 день. ХОРОШО</button>
            <button className="card-words__1w">1 неделя. ЛЕГКО</button>
          </div>
        </div>
      </div>
    );
  }
}
