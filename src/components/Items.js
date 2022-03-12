import React from "react"
import {Link} from 'react-router-dom';


const Items = ({products}) => {
    
    const url=`http://placeimg.com/640/480/${products.id}`
    return(
                          
        
        <div>      
            <h1>{products.CompanyName}</h1>
            <h2>{products.id}</h2>
            <img src={products.imagen} alt={products.color}></img>
            <p>{products.model}</p>
            <h3>{products.price}</h3>
            <Link to={url}>ver detalle</Link>
        </div>
    )
}
 
export default Items