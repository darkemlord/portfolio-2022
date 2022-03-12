import './App.scss'
import Navigation from './Components/Navigation';
import Content from './Components/Content'
import { useState, useEffect } from 'react';
import WarningModal from './Components/WarningModal';
import { RingLoader } from 'react-spinners'


function App() {
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('About me');

  //This useEffect is counting 8 seconds to charge a loading component while the website upload

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 6000);
  }, [])

  return (
    <div className="App">
      {loading ?
        <div className="loading-container">
          <RingLoader
            size={50}
            color={'#551596'}
            loading={loading}
            />
            <p className="loading-text">loading</p>
          </div>
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
