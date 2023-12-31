import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./card.scss";
import imgDogCard from "../../assets/img/dogcard.png";
import Pencil from "../../components/pencil/Pencil";
import wordJson from "../../data/words.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Card() {
  const [wordIndex, setWordIndex] = useState(0);
  const { english, russian } = wordJson[wordIndex];
  const [showRussianWord, setShowRussianWord] = useState(false);

  useEffect(() => {
    const randomWordIndex = Math.floor(Math.random() * wordJson.length);
    setWordIndex(randomWordIndex);
  }, []);

  const handleShowAnswer = () => {
    setShowRussianWord(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="card-words__cards" id="card-words__cards">
      <div className="card-words__cards-title">Тренировка</div>

      <div className="card-words__container">
        <div className="card-words__container-img">
          <img
            src={imgDogCard}
            alt="img dog"
            className="card-words__cards-img"
          />
        </div>
        <Slider {...settings}>
          <div className="card-words__cards-box">
            <div className="card-words__cards-icons">
              <Pencil />
            </div>
            <p className="card-words__word-en">{english}</p>
            {showRussianWord && (
              <p className="card-words__word-ru">{russian}</p>
            )}
            {!showRussianWord && (
              <div className="card-words__inner-answert">
                <button
                  className="card-words__button"
                  onClick={handleShowAnswer}
                >
                  Показать ответ
                </button>
              </div>
            )}
          </div>
        </Slider>
      </div>
    </div>
  );
}
