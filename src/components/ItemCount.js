

import { useState } from "react"
const ItemCount = (props) => {
   
    const [estado, setEstado]=useState(props.initial)
    console.log(estado)
    

    const  handleSumar = () => {
        if(estado < props.stock){
            setEstado (estado + 1)
        }
    }

    const  handleRestar = () => {

        if(estado > 1){
            setEstado (estado - 1)
        }
        

    }

    const  handleResetear= () => {
        setEstado (props.initial)

    }



   
    
    return(
        <main>
            <h2>mi contador va en : {estado}</h2>           
            <button onClick={handleSumar}>sumar</button>
            <button onClick={handleRestar}>restar</button>
            <button onClick={handleResetear}>resetear</button>
            <button onClick={() => props.onAdd(estado)}>Agregar</button>
        </main>

    )
}
export default ItemCount;