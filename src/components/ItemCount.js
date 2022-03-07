

import { useState } from "react"
const ItemCount = (props) => {
   
    const [estado, setEstado]=useState(props.initials)
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
        setEstado (props.initials)

    }

    const  onAdds= () => {
        
        console.log(setEstado)

    }

   
    
    return(
        <main>
            <h2>mi contador va en : {estado}</h2>           
            <button onClick={handleSumar}>sumar</button>
            <button onClick={handleRestar}>restar</button>
            <button onClick={handleResetear}>resetear</button>
            <button onClick={onAdds}>Agregar</button>
        </main>

    )
}
export default ItemCount;