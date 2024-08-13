import './liked.css'

const Liked = ({ likedProducts }) => {
  return (
    <div className="liked-container">
      <h2>Favoriten</h2>
      {likedProducts.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Hier ist noch nichts</p>
      ) : (
        likedProducts.map((product) => (
          <div key={product.id} className="liked-product">
            <img
              src={product.photo}
              alt={product.name}
              className="liked-image"
            />
            <div className="liked-info">
              <h3>{product.name}</h3>
              <p>{product.prise} Euro</p>
              <p>{product.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Liked
