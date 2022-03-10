import './ContactMe.scss'

const ContactMe = () => {
  return (
    <div className='contact-container'>
      <div className="form-container">
        <form action="submit" className='form'>
          <input type="text" id="name" placeholder=' Name'/>
          <input type="text" id="email" placeholder=' Email'/>
          <textarea type="content" id="message" placeholder=' Message'></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
