import "./App.scss";
import Navigation from "./Components/Navigation";
import Content from "./Components/Content";
import { useState } from "react";
import WarningModal from "./Components/WarningModal";

function App() {
  const [title, setTitle] = useState("Skills");

  return (
    <div className="App">
      <WarningModal />
      <div className="grid-division">
        <Navigation titleChange={setTitle} />
        <Content title={title} />
      </div>
    </div>
  );
}

export default App;
