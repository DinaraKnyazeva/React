import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <p className="header__logo">FRIENDS</p>
      <nav>
        <ul>
          <li>
            <a href="#">Словарь</a>
          </li>
          <li>
            <a href="#">Тренировка</a>
          </li>
          <li>
            <a href="#">Модули</a>
          </li>
          <li>
            <a href="#">Главная</a>
          </li>
        </ul>
      </nav>
      <div className="header__registration">
        <a href="#">Вход</a>
      </div>
    </div>
  );
}
