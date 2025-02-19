import "../App.css"
type CardProps = {
  el: string,
  setAlerta: React.Dispatch<React.SetStateAction<boolean>>,
  setMensaje: React.Dispatch<React.SetStateAction<string>>
}

const Card = ({el, setAlerta, setMensaje}: CardProps) => {

  const handleCopyColor = (color : string) => {
    console.log(color);
    navigator.clipboard.writeText(color)
    .then(() => {
        console.log('texto copiado');
        setAlerta(true);
        setMensaje('Texto copiado')
        setTimeout(() => {
          setMensaje('');
          setAlerta(false);
        }, 2000);
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