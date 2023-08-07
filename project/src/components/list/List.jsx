import "./list.scss";
import pencil from "../../assets/img/sprite.svg";
import basket from "../../assets/img/sprite.svg";

export default function List(props) {
  return (
    <div className="list">
      <div className="list__container">
        <div className="list__english">
          <p>{props.english}</p>
        </div>
        <div className="list__transcription">
          <p>{props.russian}</p>
        </div>
        <div className="list__russian">
          <p>{props.transcription}</p>
        </div>
        <div className="list__cont-icon">
          <a href="#" title="Редактировать">
            <svg id="pencil">
              <use href={pencil + "#pencil"} />
            </svg>
          </a>
          <a href="#" title="Удалить">
            <svg id="basket">
              <use href={basket + "#basket"} />
            </svg>
          </a>
        </div>
      </div>

      <p className="list__line"></p>
    </div>
  );
}
