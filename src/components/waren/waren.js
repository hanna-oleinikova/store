import Card from './card/card'
import './waren.css'

const Waren = ({ products }) => {
  return (
    <>
      <div className="sortFilter"></div>
      <div className="waren-container">
        <Card products={products} />
      </div>
    </>
  )
}

export default Waren
