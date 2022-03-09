import React from "react";
export default Items({Items}) {
    return(
        <div>
            <h1>{Items.producto}</h1>
            <img src={items.image} alt={Items.producto}></img>
            <p>{Items.description}</p>
            <h3>{Items.price}</h3>
        </div>
    )
}
