import ContentBox from '../ContentBox'
import './Content.scss'

const Content = (props) => {
  const { title } = props
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
