import React from 'react'
import './ContentBox.scss'
import AboutMe from '../AboutMe'
import Skills from '../Skills'
import MyProjects from '../MyProjects'
import ContactMe from '../ContactMe/ContactMe'

const ContentBox = (props) => {
  const { name } = props
  const handleChange = (name) => {
    switch (name) {
      case 'About Me':
        return <AboutMe />
      case 'Skills':
        return <Skills />
      case 'My Projects':
        return <MyProjects />
      case 'Contact Me':
        return <ContactMe />
      default:
        return <AboutMe />
    }
  }
  return (
    <>
      <div className="title">
        <h1>{name}</h1>
      </div>
      { handleChange(name) }
    </>
  )
}

export default ContentBox
