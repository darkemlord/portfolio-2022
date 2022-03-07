import { useState} from 'react'
import ContentBox from '../ContentBox'
import './Content.scss'

const Content = () => {
  const [title, setTitle] = useState('About me');

  return (
    <div className="content">
      <div className="content-container">
        <div className="content-bg">
          <ContentBox name={title} />
        </div>
      </div>
    </div>
  )
}

export default Content;
