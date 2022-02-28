

const ItemListContainer = (props) => {
    
    return(
        <main>
            <h2> Bienvenido{props.persona.nombre}!</h2>
            <h2> Tu edad es: {props.persona.edad}</h2>
        </main>

    )
}
export default ItemListContainer;