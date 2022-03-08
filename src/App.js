import './App.scss'
import Navigation from './Components/Navigation';
import Content from './Components/Content'
import { useState } from 'react';


function App() {

  const [title, setTitle] = useState('About me');

  return (
    <div className="App">
      <div className="grid-division">
        <Navigation titlechange={setTitle}/>
        <Content title={title} />
      </div>
    </div>
  );
}

export default App;
