import "./App.css";
import Fitnesses from "./components/Fitnesses/Fitnesses";
import Headers from "./components/Headers/Headers";
import Questions from "./components/Questions/Questions";

function App() {
  return (
    <div>
      <Headers></Headers>
      <Fitnesses></Fitnesses>
      <Questions></Questions>
    </div>
  );
}

export default App;
