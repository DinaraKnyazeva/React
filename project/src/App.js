import Header from "./components/header/Header";
import Card from "./pages/card/Card";
import "../src/style/app.css";
import Title from "./pages/title/Title";
import Decks from "./pages/decks/Decks";
import Table from "./pages/table/Table";

export default function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Title />
        <Decks />
        <Card />
        <Table />
      </main>
    </div>
  );
}
