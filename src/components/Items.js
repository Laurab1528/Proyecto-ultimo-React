import React from "react"
import {Link} from 'react-router-dom';


const Items = ({item}) => {
    
    
    return(
                          
        
        <div>      
            <h1>{item.CompanyName}</h1>
            <h2>{item.id}</h2>
            <img src={item.imagen} alt={item.color}></img>
            <p>{item.model}</p>
            <h3>${item.price}</h3>
            <Link to={`/products/${item.id}`}>ver detalle</Link>
        </div>
    )
}
 
export default Items