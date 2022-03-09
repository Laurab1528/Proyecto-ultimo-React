import React from "react"
import Products from "./Products"

const Item=() => {
    return(
        <main>
            <Products Item={products}/>
        </main>
    )
} 

const Items = (props) => {
    
    return(
                          
        
        <div>      
            <h1>{props.Item.producto}</h1>
            <h2>{props.Item.id}</h2>
            <img src={props.item.image} alt={props.Items.producto}></img>
            <p>{props.Item.description}</p>
            <h3>{props.Item.price}</h3>
        </div>
    )
}

export default Items