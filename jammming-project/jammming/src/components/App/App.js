import './App.scss';
import SearchBar from "../SearchBar/SearchBar.js"

function App() {
  return (
  <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <main>
        <SearchBar />
        <section className="containerLists">
          <div></div>
          <div></div>
        </section>
      </main>
  </div>

  );
}

export default App;
