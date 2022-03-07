import React from 'react'
import './ContentBox.scss'
import AboutMe from '../AboutMe'

const ContentBox = (props) => {
  return (
    <>
      <div className="title">
        <h1>{props.name}</h1>
      </div>
      <AboutMe />
    </>
  )
}

export default ContentBox
