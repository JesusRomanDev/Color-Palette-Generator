import "../App.css"
const Card = ({el, setAlerta, setMensaje}) => {

  const handleCopyColor = (color) => {
    console.log(color);
    navigator.clipboard.writeText(color)
    .then(() => {
        console.log('texto copiado');
        setAlerta(true);
        setMensaje('Texto copiado')
    })

    .catch(() => {
        console.log('hubo un error');
    })
    }
  return (
    <>
      <div onClick={()=> handleCopyColor(el)} className="card">
          <div className="cardColor" style={{backgroundColor: el}}></div>
          <p>{el}</p>
      </div>
    </>
  )
}

export default Card