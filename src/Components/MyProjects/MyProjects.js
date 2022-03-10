import { useEffect, useState } from 'react'
import './MyProjects.scss'
import {images, description} from './projectsData'

console.log(description)
console.log(images)


const MyProjects = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((count) => count + 1)
    }, 10000);
    return () => clearInterval(timerId)
  }, [])

  const imagesAll = images[count % images.length]
  const descriptionsAll = description[count % description.length]

  return (
    <div className="projects-container">
      <div className="project-links">
        <button className="button-project"><h2>Raibuon</h2></button>
        <button className="button-project"><h2>Kids</h2></button>
        <button className="button-project"><h2>Cocktails</h2></button>
        <button className="button-project"><h2>Watch</h2></button>
      </div>
      <div className="project-card">
        <div className="project-image fade">
          <img src={imagesAll} alt="papis lindos" />
        </div>
        <div className="project-description fade">
          <p>{descriptionsAll}</p>
        </div>
      </div>
    </div>
  )
}

export default MyProjects
