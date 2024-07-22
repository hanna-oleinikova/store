import './header.css'

const Header = ({ selectedCategory, onCategoryChange, onWindowChange }) => {
  const categories = ['alle', 'blumenstrauss', 'vase', 'blumentopf', 'tulpe']
  const rightMenuUp = ['über uns', 'kontakt', 'favoriten']
  const rightMenuDown = ['korb', 'registrieren', 'anmelden']

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
      <img src="header-logo.svg" alt="Logo"></img>
      <div className="header-right">
        <div>
          {rightMenuUp.map((itemMenu) => (
            <h4 key={itemMenu} onClick={() => onWindowChange(itemMenu)}>
              {itemMenu.charAt(0).toUpperCase() + itemMenu.slice(1)}
            </h4>
          ))}
        </div>

        <div>
          {rightMenuDown.map((itemMenu) => (
            <h4 key={itemMenu} onClick={() => onWindowChange(itemMenu)}>
              {itemMenu.charAt(0).toUpperCase() + itemMenu.slice(1)}
            </h4>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
