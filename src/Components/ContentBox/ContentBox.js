import React from 'react'
import './ContentBox.scss'

const ContentBox = (props) => {
  return (
    <>
      <div className="title">
        <h1>{props.name}</h1>
      </div>
    </>
  )
}

export default ContentBox
