import { useState } from 'react'
import './card.css'

const Card = ({ products }) => {
  const [largePhoto, setLargePhoto] = useState(null)

  const handlePhotoClick = (photoSrc) => {
    setLargePhoto(photoSrc)
  }

  return (
    <>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="card">
            <img
              src={product.photo}
              alt="warebild"
              onClick={() => handlePhotoClick(product.photo)}
              style={{ cursor: 'pointer' }}
            />
            <div className="bild-info">
              <p className="title-info">{product.name}</p>
              <p className="prise-info">Preis: {product.prise} Euro</p>
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
