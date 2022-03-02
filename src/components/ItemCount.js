

const ItemCount = (stocks,initials,onAdds) => {
    const stock=stocks
    const initial=initials
    const [estado, setEstado]=useState(initial)
    console.log(estado)
    

    const  handleSumar = () => {
        if(estado < stock){
            setEstado= (estado + 1)
        }
    }

    const  handleRestar = () => {

        if(estado > 1){
            setEstado= (estado - 1)
        }
        

    }

    const  handleResetear= () => {
        setEstado= (0)

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