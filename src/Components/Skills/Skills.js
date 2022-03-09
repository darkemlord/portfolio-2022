import './Skills.scss'
import user from './skillUserInfo';

const Skills = () => {
  return (
      <div className="skills-container">
        {user.map((element, index) => (
          <div key={element + index} className="skill-type-content" id={element.title}>
            <div className="skill-title">
              <h2>{element.title}</h2>
            </div>
            <div className="icon-container">
              {element.icon.map((element) => <i className={element} key={element}></i>)}
            </div>
          </div>
        ))}
      </div>
  )
}

export default Skills
