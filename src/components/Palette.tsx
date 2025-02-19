import { useState, useEffect } from "react"
import colorHEX from "../utils/helper.tsx"
import Card from "./Card.tsx"
const Palette = () => {
    const [color, setColor] = useState([colorHEX(),colorHEX(), colorHEX(), colorHEX(), colorHEX()])
    const [mensaje, setMensaje] = useState('');
    const [alerta, setAlerta] = useState(false);
    const generateNewColors = () => {
        setColor([colorHEX(), colorHEX(), colorHEX(), colorHEX() ,colorHEX()])
    }

    const handleSpacebar = (event) => {
        if (event.code === 'Space') {
          console.log('Barra espaciadora presionada');
          // Aquí ejecutas la función que desees
            setColor([colorHEX(), colorHEX(), colorHEX(), colorHEX() ,colorHEX()])

        }
    };
    
    useEffect(() => {
    // Agrega el event listener al montar el componente
    window.addEventListener('keydown', handleSpacebar);

    // Remueve el event listener al desmontar el componente
    return () => {
        window.removeEventListener('keydown', handleSpacebar);
    };
    }, []);


  return (
    <> 
        {alerta && <p>{mensaje}</p>}
        <section className="contenedor">
            {color.map( el => (
                (
                    <Card setAlerta={setAlerta} setMensaje={setMensaje} el={el}/>
                )
            ))}
        </section>
        <button className="boton" onClick={generateNewColors}>Generate Palette</button>

        <p>Or just press the "Spacebar" to generate new palettes.</p>
        <p>Click to copy individual color.</p>
    </>
  )
}

export default Palette