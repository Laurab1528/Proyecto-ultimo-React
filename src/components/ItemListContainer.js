
import ItemCount from './ItemCount'
import products from './products';
import React,{useEffect} from 'react'
import { useEffect } from 'react';
import Itemlist from './Itemlist';

function getdatos(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=> resolve(products),2000);
    })


const ItemListContainer = (props) => {
    const [Items,setItems]=useState([]);
    useEffect(() => {
        getdatos()
        .then(respuestaPromise=> setItems(respuestaPromise))
    },[]);
    
 

    
    
    return(
        <main>
            <h2> Bienvenido {props.persona.nombre}!</h2>
            <h2> Tu edad es: {props.persona.edad}</h2>            
            <ItemCount 
            stock={20}
            initials={10}
            />    
            <Itemlist Items={Items}  /> 
        </main>

    )
}
export default ItemListContainer