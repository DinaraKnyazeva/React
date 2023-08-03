function Superheroes(props) {
  return (
    <div className="cardSuperheroes__container">
      <h1 className="cardSuperheroes__name">{props.name}</h1>
      <div className="cardSuperheroes__universe">
        <span className="cardSuperheroes__text">Вселенная:</span>
        {props.universe}
      </div>
      <div className="cardSuperheroes__alterego">
        <span className="cardSuperheroes__text">Альтер эго:</span>
        {props.alterego}
      </div>
      <div className="cardSuperheroes__occupation">
        <span className="cardSuperheroes__text">Род деятельности:</span>
        {props.occupation}
      </div>
      <div className="cardSuperheroes__friends">
        <span className="cardSuperheroes__text">Друзья:</span>
        {props.friends}
      </div>
      <div className="cardSuperheroes__superpowers">
        <span className="cardSuperheroes__text">Суперсилы:</span>
        {props.superpowers}
      </div>
      <img src={props.url} alt="img super heroes" />
      <div className="cardSuperheroes__rating-area">
        <input
          className="cardSuperheroes__star"
          type="radio"
          id={`star-5${props.name}`}
          name={`rating-${props.name}`}
          value="5"
        />
        <label for={`star-5${props.name}`} title="Оценка «5»"></label>
        <input
          className="cardSuperheroes__star"
          type="radio"
          id={`star-4${props.name}`}
          name={`rating-${props.name}`}
          value="4"
        />
        <label for={`star-4${props.name}`} title="Оценка «4»"></label>
        <input
          className="cardSuperheroes__star"
          type="radio"
          id={`star-3${props.name}`}
          name={`rating-${props.name}`}
          value="3"
        />
        <label for={`star-3${props.name}`} title="Оценка «3»"></label>
        <input
          className="cardSuperheroes__star"
          type="radio"
          id={`star-2${props.name}`}
          name={`rating-${props.name}`}
          value="2"
        />
        <label for={`star-2${props.name}`} title="Оценка «2»"></label>
        <input
          className="cardSuperheroes__star"
          type="radio"
          id={`star-1${props.name}`}
          name={`rating-${props.name}`}
          value="1"
        />
        <label for={`star-1${props.name}`} title="Оценка «1»"></label>
      </div>
    </div>
  );
}
export default Superheroes;
