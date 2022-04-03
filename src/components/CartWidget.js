import { useContext } from "react"
import { contexto } from "./Context"
import {sentBuyOrder} from '../Firebase'
import { Link } from "react-router-dom"


const Carrito = () => {

    const {itemsCart,carrito,calcularTotal , limpiarCarrito, borrarProdDelCarrito} = useContext(contexto)
    const [OrderComplete,SetOrdercomplete]=React.useState(false);

    function handleSummit() {

        limpiarCarrito();
        SetOrdercomplete(True);
        SetOrdercomplete("pending");
        const orderData ={
    
            Buyer:{
                name:"Laura",
                Phone:"34662587",
                Email:"laurab1724@gmail.com"
            },
            Items:[...itemsCart],
            total:calcularTotal()
        }
        sentBuyOrder(orderData).then (respuestaPromise => setOrderId(respuestaPromise));
       

    }

    if(itemsCart.length ===0)
        return(
            {Ordercomplete && OrderComplete!=="pending"?       
                <h1> Orden completa </h1>   
                <p> este es el numero del ticket: {Ordercomplete}</p>                      
                
            :
            
            <div>  
                <h1>No hay elementos en el carrito</h1><p>Te invitamos a realizar tu compra</p><Link to="/">Ir al catalogo</Link>
            </div>
            }
        );

    else
                
         
        return(
          
            < >
                <h1>Carrito</h1>             
                <div>
                
                    {carrito.map(producto => (
                        <div key={producto.id}>
                            <p>{producto.model}</p>
                            <p>{producto.Cantidad} x {producto.precio}</p>
                            <p>Total Parcial : {producto.Cantidad * producto.precio}</p>
                            <button onClick={() => borrarProdDelCarrito(producto.id)}>
                                Eliminar producto
                            </button>
                            <h2>Total: ${calcularTotal()}</h2>
                            <button onClick={limpiarCarrito}>Vaciar cart</button>
                            <button onClick={handleSummit}>Finalizar Compra</button>
                        </div>
                    ))}
                </div>   
            </>

           
        );
        
}
export default Carrito