import "./App.css";
import AddMovie from "./component/AddMovie";
import MovieList from "./component/MovieList";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <h1>Feri-el</h1>
      <AddMovie />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
