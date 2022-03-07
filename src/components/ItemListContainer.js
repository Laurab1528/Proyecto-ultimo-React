
import ItemCount from './ItemCount'



const ItemListContainer = (props) => {

 

    
    
    return(
        <main>
            <h2> Bienvenido {props.persona.nombre}!</h2>
            <h2> Tu edad es: {props.persona.edad}</h2>            
            <ItemCount 
            stock={20}
            initials={10}
            />      
        </main>

    )
}
export default ItemListContainer;