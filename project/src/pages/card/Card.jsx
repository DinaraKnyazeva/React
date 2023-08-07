import React, { useState } from "react";
import "./card.scss";
import imgDogCard from "../../assets/img/dogcard.png";
import Btn from "../../components/btn/Btn";
import Pencil from "../../components/pencil/Pencil";
import wordJson from "../../data/words.json";

export default function Card() {
  const randomWordIndex = Math.floor(Math.random() * wordJson.length);
  const { english, russian } = wordJson[randomWordIndex];
  const [showRussianWord, setShowRussianWord] = useState(false);
  const handleShowAnswer = () => {
    setShowRussianWord(true);
  };

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
            <Pencil />
          </div>
          {showRussianWord ? (
            <p className="card-words__word-ru">{russian}</p>
          ) : (
            <p className="card-words__word-ru" style={{ visibility: "hidden" }}>
              {russian}
            </p>
          )}
          <p className="card-words__word-en">{english}</p>
          <div className="card-words__inner-answert">
            <button
              type="button"
              className="card-words__button"
              onClick={handleShowAnswer}
            >
              Показать ответ
            </button>
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
