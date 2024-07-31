import ButtonSort from './buttonsSort/buttonSort'
import Card from './card/card'

import './waren.css'

const Waren = ({ products, onSortWaren }) => {
  return (
    <div className="waren-container">
      <div className="sorted-buttons">
        <p>Sortieren nach...</p>
        <ButtonSort
          title="Preis absteigend"
          onClick={() => onSortWaren('priceDesc')}
        />
        <ButtonSort
          title="Preis aufsteigend"
          onClick={() => onSortWaren('priceAsc')}
        />
        <ButtonSort title="ABC" onClick={() => onSortWaren('nameAsc')} />
        <ButtonSort title="ZYX" onClick={() => onSortWaren('nameDesc')} />
      </div>
      <Card products={products} />
    </div>
  )
}

export default Waren
