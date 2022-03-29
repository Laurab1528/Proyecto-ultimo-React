import ItemCount from './ItemCount'
import React,{useEffect} from 'react'
import Itemlist from './Itemlist';
import { useParams} from 'react-router-dom';
import { useState } from 'react';
import Spinner from './Spinner'
import { toast } from "react-toastify";
import {getAllcars,getAllcarsFromCatgory} from "../Firebase/index"
const ItemListContainer = () => {
    const [item, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCompany } = useParams();

    useEffect(() => {
        if (idCompany){
            getAllcarsFromCatgory(idCompany)      
            .then(respuestaPromise => setItems(respuestaPromise))
            .finally(()=>setLoading(false))
        }
        else{
            getAllcars()      
            .then(respuestaPromise => setItems(respuestaPromise))
            .finally(()=>setLoading(false))

        }
        }, [idCompany]);

    return (
        <div style={{ marginTop: '20px' }}>
           
            <main>
                     
                <ItemCount 
                stock={20}
                initials={10}
                />                   
                
            </main>

    )
            {loading ? <Spinner /> : <Itemlist item={item} />}
        </div>
    );
};



export default ItemListContainer