import { useContext } from "react"
import { contexto } from "./Context"


const Carrito = () => {

    const {carrito} = useContext(contexto)

    const handleClick = () => {
        
    }

    return (
        <div>
            <h2>Carrito</h2>
            {carrito.map(producto => (
                <div key={producto.id}>
                    <p>{producto.model}</p>
                    <p>{producto.Cantidad} x {producto.precio}</p>
                    <p>Total Parcial : {producto.Cantidad * producto.precio}</p>
                    <button onClick={handleClick}>borrar</button>
                </div>
            ))}
        </div>
    )
}

export default Carrito