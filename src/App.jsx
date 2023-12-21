import "./App.css";
import MoviesList from "./component/movielist";
import Header from "./component/header";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        <Header />
        <MoviesList />
      </section>
    </div>
  );
}

export default App;
