import './registr.css'

const Registr = () => {
  return (
    <div className="registr-container">
      <h2>Registrieren</h2>
      <form action="/register" method="post" className="registr-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="form-group">
          <label for="email">E-Mail:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="password">Passwort:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div class="form-group">
          <label for="confirm-password">Passwort bestätigen:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
          />
        </div>
        <div class="form-group">
          <button type="submit">Registrieren</button>
          <button type="reset">Zurücksetzen</button>
        </div>
      </form>
    </div>
  )
}

export default Registr
