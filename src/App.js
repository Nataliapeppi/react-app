import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello from cold Barcelona</h1>
        <Weather city="Minneapolis" />
      </header>
    </div>
  );
}

export default App;
