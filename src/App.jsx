import "./App.css";
import ToInput from "./components/ToInput";
import ToList from "./components/ToList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <ToInput />
      <ToList />
    </div>
  );
}

export default App;
