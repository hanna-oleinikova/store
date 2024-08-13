import ButtonSort from './buttonsSort/buttonSort'
import Card from './card/card'

import './waren.css'

const Waren = ({ products, onSortWaren, onLikeProduct, likedProducts }) => {
  return (
    <div className="waren-container">
      <div className="sorted-buttons">
        <p>Sortieren...</p>
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
      <Card
        products={products}
        onLikeProduct={onLikeProduct}
        likedProducts={likedProducts}
      />
    </div>
  )
}

export default Waren
