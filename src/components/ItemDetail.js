

const ItemDetail = ({item}) => {
    return (
        <article className="itemDetail">
            <img src={item.imagen} alt="" />
            <div className="titulos">
                <h3>{item.model}</h3>
                <p>${item.Price}</p>
                <p>{item.color}</p>
                
            </div>
            <p className="descripcion">{item.CompanyName}</p>
        </article>
    )
}

export default ItemDetail