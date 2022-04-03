import { createContext, useState } from "react";

export const contexto = createContext()

const { Provider } = contexto

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);   

    const addItem = (producto,cantidad) => {     
        //Copiamos carrito con .splice o operador spread "..."
        const copiaCarrito = [...carrito];
        const itemAlCarrito = { ...producto, cantidad};        

        if(yaExisteEnCarrito(producto.id)) {            
            let index = //findIndex del item al que necesitamos sumar la cantidad recibida
            copiaCarrito[index].cantidad += cantidad;
            setCarrito(copiaCarrito)
        } 
        else{
            copiaCarrito.push(itemAlCarrito);
            setCarrito(copiaCarrito);
        }        
    }

    const yaExisteEnCarrito = (id) => {
        return carrito.some((producto) => producto.id === id);
    }

    const borrarProdDelCarrito = (id) => {
        setCarrito(carrito.filter((producto) => producto.id !== id));
    };

    const limpiarCarrito = () => {
        setCarrito([])
    }

    const calcCantidad = () =>{
        let cantidadTotal = 0;
        //forEach -> por cada item incrementammos el total
        return cantidadTotal;
    }

    const sumarCantidad = (item, cantidad) => {
        const newProducts = carrito.map((producto) => {
            if (producto.id === item.id) {
                const newProduct = {
                    ...producto,
                    cantidad: producto.cantidad + cantidad,
                };
                return newProduct;
            } else {
                return producto;
            }
        });
        setCarrito(newProducts);
    };

    
    const calcularTotal = () => {
        let totalCarrito = 0;
        carrito.forEach((producto) => {
            totalCarrito += producto.price * producto.cantidad;
        });
        return totalCarrito;
    
    };

    const valorDelContexto = {
        carrito: carrito,      
        addItem: addItem,
        calcCantidad: calcCantidad,
        borrarProdDelCarrito:borrarProdDelCarrito,
        limpiarCarrito:limpiarCarrito,
        sumarCantidad:sumarCantidad,
        calcularTotal:calcularTotal,

        // agregar el resto de las funciones que vayan creando
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider