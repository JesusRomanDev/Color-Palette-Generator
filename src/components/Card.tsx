import "../App.css"
const Card = ({el}) => {
  return (
    <>
        <div className="card">
            <div className="cardColor" style={{backgroundColor: el}}></div>
            <p>{el}</p>
        </div>
    </>
  )
}

export default Card