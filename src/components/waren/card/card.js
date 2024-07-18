import './card.css'

const Card = ({ products }) => {
  return (
    <>
      {products.lenght === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.photo} alt="warebild" />
            <div className="bild-info">
              <p className="title-info">{product.name}</p>
              <p className="prise-info">Preis: {product.prise} Euro</p>
            </div>
          </div>
        ))
      )}
    </>
  )
}

export default Card
