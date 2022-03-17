

import { useState } from "react"
const ItemCount = (item) => {
   
    const [estado, setEstado]=useState(item.initials)
    console.log(estado)
    

    const  handleSumar = () => {
        if(estado < item.stock){
            setEstado (estado + 1)
        }
    }

    const  handleRestar = () => {

        if(estado > 1){
            setEstado (estado - 1)
        }
        

    }

    const  handleResetear= () => {
        setEstado (item.initials)

    }

    const  onAdd= () => {
        
        
        console.log(setEstado);

    }

   
    
    return(
        <main>
            <h2>mi contador va en : {estado}</h2>           
            <button onClick={handleSumar}>sumar</button>
            <button onClick={handleRestar}>restar</button>
            <button onClick={handleResetear}>resetear</button>
            <button onClick={onAdd}>Agregar</button>
        </main>

    )
}
export default ItemCount;