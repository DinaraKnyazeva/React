import React from "react";
import "./card.scss";
import "../../components/btn/Btn";
import imgDogCard from "../../assets/img/dogcard.png";
import Btn from "../../components/btn/Btn";

export default class Card extends React.Component {
  render() {
    return (
      <div className="card-words__cards">
        <div className="card-words__cards-title">Тренировка</div>
        <div className="card-words__container">
          <div className="card-words__container-img">
            <img
              src={imgDogCard}
              alt="img dog"
              className="card-words__cards-img"
            />
          </div>
          <div className="card-words__cards-box">
            <div className="card-words__cards-icons">
              <button src=""></button>
              <link rel="stylesheet" href="#" src="" />
            </div>
            <p className="card-words__word-ru">Земля</p>
            <p className="card-words__word-en">Earth</p>
            <div className="card-words__container-img-word">
              <img
                src="https://img.freepik.com/premium-vector/earth-illustration_219965-20.jpg?w=2000"
                alt=""
              />
            </div>
            <div className="card-words__inner-answert">
              <button className="card-words__button">Показать ответ</button>
            </div>
            <div className="card-words__inner-repeat">
              <Btn name={"Трудно"} className={"card-words__button"} />
              <Btn name={"Хорошо"} className={"card-words__button"} />
              <Btn name={"Легко"} className={"card-words__button"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}