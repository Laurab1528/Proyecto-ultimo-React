
import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Spinner from './Spinner';
import { toast } from "react-toastify";


function ItemDetailContainer(  )  {


    const [item,setItem]=useState([]);
    const {idmodel}=useParams();
    const [loading,setLoading] =useState(true);
   
 
    useEffect(()=>{

        fetch(`https://6208563822c9e90017d33067.mockapi.io/api/v1/carro/${idmodel}`)
        .then((res)=>{
            return res.json()
        })
        .then((respuesta)=>{
          setItem(respuesta)
        })
        .catch(()=>{
          toast.error("Error al cargar el producto")
        })
        .finally(()=>{
          setLoading(false)
        })
    
      },[])
    
    return(
        <>
        

        <div className="container" style={{ marginTop: '20px' }}>
            {loading ? <Spinner /> : <ItemDetail item={item} />}
        </div>
        </>
    )
}
    
    
 


export default ItemDetailContainer
