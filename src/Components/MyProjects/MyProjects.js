import { useEffect, useState } from 'react'
import './MyProjects.scss'
import {images, description, urls} from './projectsData'

const MyProjects = () => {
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicket] = useState(false)
  const [ fade, setFade ] = useState('fade')
  const [display, setDisplay] = useState(undefined)
  const [displayDesc, setDisplayDesc] = useState(undefined)
  const [imageUrl, setImageUrl] = useState(undefined)

  useEffect(() => {
    if(!isClicked){
      const timerId = setInterval(() => {
        setCount((count) => count + 1)
      }, 7000);
      return () => clearInterval(timerId)
    }
  }, [isClicked])

  const handleClickRaibuon = () => {
    setIsClicket(true)
    setDisplayDesc(description[0])
    setDisplay(images[0])
    setFade('no-active')
    setImageUrl(urls[0])
  }
  const handleClickKids = () => {
    setIsClicket(true)
    setDisplayDesc(description[1])
    setDisplay(images[1])
    setFade('no-active')
     setImageUrl(urls[1])
  }

  const handleClickCocktails = () => {
    setIsClicket(true)
    setDisplayDesc(description[2])
    setDisplay(images[2])
    setFade('no-active')
     setImageUrl(urls[2])
  }

    const handleClickWatch = () => {
    setIsClicket(true)
    setDisplayDesc(description[3])
    setDisplay(images[3])
    setFade('no-active')
     setImageUrl(urls[3])
  }
  const imagesAll = images[count % images.length]
  const descriptionsAll = description[count % description.length]

  return (
    <div className="projects-container">
      <div className="project-links">
        <button className="button-project" onClick={handleClickRaibuon}><h2>Raibuon</h2></button>
        <button className="button-project" onClick={handleClickKids}><h2>Kids</h2></button>
        <button className="button-project" onClick={handleClickCocktails}><h2>Cocktails</h2></button>
        <button className="button-project" onClick={handleClickWatch}><h2>Watch</h2></button>
      </div>
      <div className="project-card">
        <div className={`project-image ${fade}`}>
          <a href={imageUrl} target="_blank" rel="noreferrer"><img src={!display ? imagesAll : display} alt="papis lindos" /></a>
        </div>
        <div className={`project-description ${fade}`}>
          <p>{!displayDesc ? descriptionsAll : displayDesc}</p>
        </div>
      </div>
    </div>
  )
}

export default MyProjects
