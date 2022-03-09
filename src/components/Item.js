import React from "react";
export default Item({Item}) {
    return(
        <div>
            <h1>{Item.producto}</h1>
            <img src={item.image} alt={Item.producto}></img>
            <p>{Item.description}</p>
            <h3>{Item.price}</h3>
        </div>
    )
}
