import "./App.css";
import MoviesList from "../component/MoviesList";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <MoviesList />
        <h1 className="movie-list-header">Movie List Section</h1>
      </section>
    </div>
  );
}

export default App;
