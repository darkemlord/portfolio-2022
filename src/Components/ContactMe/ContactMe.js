import "./ContactMe.scss"

const ContactMe = () => {

  return (
    <div className="contact-container">
      <div className="form-container">
        <form action="https://getform.io/f/a305fbe2-6f2a-49b7-ad6c-1c2f2e355787" className="form" method="POST">
          <input type="text" id="name" name="name" placeholder=" Name" required="true"/>
          <input type="text" id="email" name="email" placeholder=" Email" required="true"/>
          <textarea type="content" id="message" name="message" placeholder=" Message"></textarea>
          <button className="button-contact"type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
