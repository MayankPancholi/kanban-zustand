import "./App.css";
import Column from "./components/Column";

function App() {
  return (
    <div id="App">
      <Column status="PLANNED" />
      <Column status="ONGOING" />
      <Column status="DONE" />
    </div>
  );
}

export default App;
