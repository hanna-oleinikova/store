import './anmelden.css'

const Anmelden = ({ onWindowChange }) => {
  return (
    <div className="anmelden-container">
      <h2>Anmelden</h2>
      <form action="/login" method="post" className="anmelden-form">
        <div class="form-group">
          <label for="email">E-Mail:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="password">Passwort:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div class="form-group">
          <button type="submit">Anmelden</button>
          <button type="reset">Zurücksetzen</button>
        </div>
      </form>
      <p>
        Noch kein Konto?{' '}
        <span onClick={() => onWindowChange('registrieren')}>Registrieren</span>
      </p>
    </div>
  )
}

export default Anmelden
