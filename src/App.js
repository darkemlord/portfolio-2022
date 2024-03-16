import "./App.scss";
import Navigation from "./Components/Navigation";
import Content from "./Components/Content";
import WarningModal from "./Components/WarningModal";

function App() {
  return (
    <div className="App">
      <WarningModal />
      <div className="grid-division">
        <Navigation />
        <Content />
      </div>
    </div>
  );
}

export default App;
