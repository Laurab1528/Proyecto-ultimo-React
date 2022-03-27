
import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Spinner from './Spinner';
import { toast } from "react-toastify";
import { getAllcar } from '../Firebase';


function ItemDetailContainer({greeting,id}  )  {


    const [item,setItem]=useState([]);
    const {idmodel}=useParams();
    const [loading,setLoading] =useState(true);
   
 
    useEffect(()=>{
        getAllcar(idmodel)
        .then(respuestaPromise=> setItem(respuestaPromise))
    }, [idmodel]);
    
    return(
        <>
        
        <h1>{greeting}</h1>
        <div className="container" style={{ marginTop: '20px' }}>
            {loading ? <Spinner /> : <ItemDetail item={item} />}
        </div>
        </>
    )
}
    
    
 


export default ItemDetailContainer
