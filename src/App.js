import "./App.scss";
import PokeSearch from "./components/PokeSearch";

function App() {
  return (
    <section>
      <div
        className="container flex flex-col flex-wrap h-screen items-center justify-center mx-auto px-3 md:flex-row"
        data-pg-collapsed
      >
        <PokeSearch />
      </div>
    </section>
  );
}

export default App;
