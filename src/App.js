import './App.scss'
import Navigation from './Components/Navigation';
import background from './assets/media/Vector_2646.jpg';
import Content from './Components/Content'


function App() {
  return (
    <div className="App">
      <img className="background-image" src={background} alt="hello" />
      <div className="grid-division">
        <Navigation />
        <Content />
      </div>
    </div>
  );
}

export default App;
