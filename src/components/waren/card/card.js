import { useState } from 'react'
import './card.css'
import { FaHeart, FaCartShopping, FaXmark } from 'react-icons/fa6'

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
              <div className="small-image-container">
                <img
                  src={product.photo}
                  alt="warebild"
                  onClick={() => handlePhotoClick(product.photo)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            ) : (
              <div className="description-container">
                <span className="description">{product.description}</span>
              </div>
            )}

            <div className="bild-info">
              <div className="buttons-like-buy">
                <FaHeart className="like-button" />
                <FaCartShopping className="shop-button" />
              </div>
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
        <div className="large-image-container">
          <FaXmark
            className="close-button"
            onClick={() => setLargePhoto(null)}
          />
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
