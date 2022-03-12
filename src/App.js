import './App.scss'
import Navigation from './Components/Navigation';
import Content from './Components/Content'
import { useState, useEffect } from 'react';
import WarningModal from './Components/WarningModal';


function App() {
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('About me');

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 8000);
  }, [])

  return (
    <div className="App">
      {loading ?
        <h1> hola </h1>
        :
        <>
          <WarningModal />
          <div className="grid-division">
            <Navigation titlechange={setTitle}/>
            <Content title={title} />
          </div>
        </>
      }
    </div>
  );
}

export default App;
