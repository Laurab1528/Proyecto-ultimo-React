
import products from './products';
import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';



function getInfo(idmodel){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
        let productoss =    products.find(item=>item.model === idmodel);
        resolve(productoss)
        },2000);
    })

}
function ItemDetailContainer( {greeting,id} )  {
    const [item,setItem]=useState([]);
    const [idmodel]=useParams();
   
 
    useEffect(() => {

     getInfo(idmodel)
     .then(respuestaPromise =>setItem(respuestaPromise))
    },[]);

    return(
        <>
        <h1>greeting</h1>
        <div className="container">
            <ItemDetail item={item}/>

        </div>
        </>
    )
}
    
    
 


export default ItemDetailContainer
