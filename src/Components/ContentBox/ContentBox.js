import React from 'react'
import './ContentBox.scss'
import AboutMe from '../AboutMe'

const ContentBox = (props) => {
  const { name } = props
  console.log(name)
  return (
    <>
      <div className="title">
        <h1>{name}</h1>
      </div>
      {name === 'About me' ? <AboutMe /> : <h1>Hello babies</h1>  }
    </>
  )
}

export default ContentBox
