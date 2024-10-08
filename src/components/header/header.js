// import { useState } from 'react'
import './header.css'

const Header = ({
  selectedCategory,
  onCategoryChange,
  onWindowChange,
  rightMenuItem,
}) => {
  const categories = ['alle', 'blumenstrauss', 'vase', 'blumentopf', 'tulpe']
  const rightMenuUp = ['über uns', 'kontakt', 'favoriten']
  const rightMenuDown = ['korb', 'registrieren', 'anmelden']
  // const [colorLogo, setColorLogo] = useState('white')

  return (
    <div className="header-container">
      <div className="header-left">
        {categories.map((category) => (
          <h4
            key={category}
            className={selectedCategory === category ? 'selected' : ''}
            onClick={() => onCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h4>
        ))}
      </div>

      <img src="./logo/logo-white.svg" alt="Logo" className="header-logo"></img>

      <div className="header-right">
        <div>
          {rightMenuUp.map((itemMenu) => (
            <h4
              key={itemMenu}
              onClick={() => onWindowChange(itemMenu)}
              className={rightMenuItem === itemMenu ? 'selected' : ''}
              style={{ cursor: 'pointer' }}
            >
              {itemMenu.charAt(0).toUpperCase() + itemMenu.slice(1)}
            </h4>
          ))}
        </div>

        <div>
          {rightMenuDown.map((itemMenu) => (
            <h4
              key={itemMenu}
              onClick={() => onWindowChange(itemMenu)}
              className={rightMenuItem === itemMenu ? 'selected' : ''}
              style={{ cursor: 'pointer' }}
            >
              {itemMenu.charAt(0).toUpperCase() + itemMenu.slice(1)}
            </h4>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
