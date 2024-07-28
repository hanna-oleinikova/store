import { useState } from 'react'
import './contact.css'
import {
  FaFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from 'react-icons/fa6'
import Formular from './formular/formular'

const Contact = () => {
  const [kontaktformular, setKontaktformular] = useState(false)

  return (
    <div className="contact-container">
      <h2>Kontakt</h2>
      <p>
        Wir freuen uns, von Ihnen zu hören! Hier finden Sie alle Möglichkeiten,
        wie Sie mit uns in Kontakt treten können:
      </p>
      <div className="column-container">
        <div className="column">
          <h3>Adresse</h3>
          <p>
            Blumenparadies GmbH <br /> Musterstraße 123 <br /> 12345 Blumenstadt
            <br />
            Deutschland
          </p>
          <h3>Telefon</h3>
          <p>
            Telefon: <span>+49 123 456789</span>
          </p>
          <p>
            Fax: <span>+49 123 987654</span>
          </p>
          <h3>E-Mail</h3>
          <p>
            <span>info@blumenparadies.de</span> - Allgemeine Anfragen <br />
            <span>bestellung@blumenparadies.de</span> - Bestellungen <br />
            <span>support@blumenparadies.de</span> - Kundendienst
          </p>
        </div>
        <div className="column">
          <h3>Öffnungszeiten</h3>
          <p>
            Montag - Freitag: 09:00 - 18:00 Uhr <br /> Samstag: 10:00 - 16:00
            Uhr
            <br />
            Sonntag: Geschlossen
          </p>
          <h3>Soziale Medien</h3>
          <p>
            Folgen Sie uns auf unseren sozialen Medien, um über die neuesten
            Angebote und Neuigkeiten informiert zu bleiben:
          </p>

          <div className="medien-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="react-icons" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram className="react-icons" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter className="react-icons" />
            </a>
          </div>

          <h3>Kontaktformular</h3>
          <p>
            Alternativ können Sie auch unser Kontaktformular ausfüllen, und wir
            werden uns so schnell wie möglich bei Ihnen melden: <br />
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => setKontaktformular((prev) => !prev)}
            >
              Kontaktformular ausfüllen
            </span>
          </p>
        </div>
      </div>
      {kontaktformular && <Formular />}
    </div>
  )
}

export default Contact
