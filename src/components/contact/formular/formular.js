import './formular.css'

const Formular = () => {
  return (
    <div className="formular-container">
      <h2 className="formular-title">Kontaktformular</h2>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">E-Mail:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Nachricht:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button className="button-submit" type="submit">
          Absenden
        </button>
      </form>
    </div>
  )
}

export default Formular
