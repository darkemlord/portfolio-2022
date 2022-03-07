import './App.scss'
import Navigation from './Components/Navigation';
import background from './assets/media/Vector_2646.jpg';
import Content from './Components/Content'
import { useState } from 'react';


function App() {

  const [title, setTitle] = useState('About me');

  return (
    <div className="App">
      <img className="background-image" src={background} alt="hello" />
      <div className="grid-division">
        <Navigation titlechange={setTitle}/>
        <Content title={title} />
      </div>
    </div>
  );
}

export default App;
