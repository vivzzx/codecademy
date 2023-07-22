import './App.scss';
import SearchBar from "../SearchBar/SearchBar"
import Playlist from "../Playlist/Playlist";
import SearchResults from "../SearchResults/SearchResults";

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <h1>Jammming</h1>
        </header>
        <main>
          <SearchBar />
          <section className="containerLists">
            <SearchResults />
            <Playlist />
          </section>
        </main>
    </div>

  );
}

export default App;
