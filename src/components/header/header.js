import './header.css'

const Header = ({ selectedCategory, onCategoryChange }) => {
  const categories = ['alle', 'blumenstrauss', 'vase', 'blumentopf', 'tulpe']

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
          <h4>Über uns</h4>
          <h4>Kontact</h4>
          <h4>Favoriten</h4>
        </div>
        <div>
          <h4>Korb</h4>
          <h4>Registrieren</h4>
          <h4>Anmelden</h4>
        </div>
      </div>
    </div>
  )
}

export default Header
