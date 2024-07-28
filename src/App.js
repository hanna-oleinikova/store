import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/header'
import Waren from './components/waren/waren'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Liked from './components/liked/liked'
import Anmelden from './components/anmelden/anmelden'
import Registr from './components/registr/registr'
import Korb from './components/korb/korb'

function App() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('alle')
  const [rightMenuItem, setRightMenuItem] = useState(null)

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  useEffect(() => {
    console.log('Fetching data from /dataBase.json')
    fetch('/dataBase.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`)
        }
        return response.json()
      })
      .then((data) => {
        const shuffledProducts = shuffleArray(data)
        console.log('Data fetched successfully:', shuffledProducts)
        setProducts(shuffledProducts)
      })
      .catch((error) => console.error('Error fetching:', error))
  }, [])

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory)
  }

  const filterByCategory = (products, category) => {
    return products.filter((product) => product.category === category)
  }

  const filteredProducts =
    category === 'alle' ? products : filterByCategory(products, category)

  const handleMenuItemChange = (window) => {
    setRightMenuItem((prevWindow) => (prevWindow === window ? null : window))
  }

  return (
    <div className="App">
      <Header
        selectedCategory={category}
        onCategoryChange={handleCategoryChange}
        onWindowChange={handleMenuItemChange}
        rightMenuItem={rightMenuItem}
      />

      {rightMenuItem === 'über uns' && <About />}
      {rightMenuItem === 'kontakt' && <Contact />}
      {rightMenuItem === 'favoriten' && <Liked />}
      {rightMenuItem === 'anmelden' && <Anmelden />}
      {rightMenuItem === 'registrieren' && <Registr />}
      {rightMenuItem === 'korb' && <Korb />}

      <Waren products={filteredProducts} />
    </div>
  )
}

export default App
