import './MyProjects.scss'
import kids from '../../assets/media/raibuon.png'

console.log(kids)

const MyProjects = () => {
  return (
    <div className="projects-container">
      <div className="project-links">
        <button className="button-project"><h2>Raibuon</h2></button>
        <button className="button-project"><h2>Kids</h2></button>
        <button className="button-project"><h2>Cocktails</h2></button>
        <button className="button-project"><h2>Watch</h2></button>
      </div>
      <div className="project-card">
        <div className="project-image">
          <img src={kids} alt="papis lindos" />
        </div>
        <div className="project-description">
          <p>"Raibuon is an application designed to facilitate the tipping process of street musicians, through the app you can promote your performance as an artist and also the places where street artists from all over Japan are now playing live. My role in the app was lead developer so I have been taking care of the back-end as well as the front-end, the app is still developing to become a useful product for the artists."</p>
        </div>
      </div>
    </div>
  )
}

export default MyProjects
