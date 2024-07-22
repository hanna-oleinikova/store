import { useState } from 'react'
import './card.css'

const Card = ({ products }) => {
  const [largePhoto, setLargePhoto] = useState(null)
  const [descriptionStates, setDescriptionStates] = useState({})

  const handlePhotoClick = (photoSrc) => {
    setLargePhoto(photoSrc)
  }

  const toggleDescription = (productId) => {
    setDescriptionStates((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }))
  }

  return (
    <>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="card">
            {!descriptionStates[product.id] ? (
              <img
                src={product.photo}
                alt="warebild"
                onClick={() => handlePhotoClick(product.photo)}
                style={{ cursor: 'pointer' }}
              />
            ) : (
              <div className="description-container">
                <span className="description">{product.description}</span>
              </div>
            )}

            <div className="bild-info">
              <p className="title-info">{product.name}</p>
              <p className="prise-info">Preis: {product.prise} Euro</p>
              <button onClick={() => toggleDescription(product.id)}>
                Beschreibung
              </button>
            </div>
          </div>
        ))
      )}
      {largePhoto && (
        <div className="image-container">
          <img
            className="large-image"
            src={largePhoto}
            alt="large"
            onClick={() => setLargePhoto(null)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      )}
    </>
  )
}

export default Card
