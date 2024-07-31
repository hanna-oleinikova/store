import './buttonSort.css'

const ButtonSort = ({ title, onClick }) => {
  return (
    <button className="buttonSort" onClick={onClick}>
      {title}
    </button>
  )
}

export default ButtonSort
