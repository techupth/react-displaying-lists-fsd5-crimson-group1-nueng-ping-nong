import "./App.css";
import MoviesList from "../component/MoviesList";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1 className="movie-list-header">Movie List Section</h1>
        <MoviesList />
      </section>
    </div>
  );
}

export default App;
