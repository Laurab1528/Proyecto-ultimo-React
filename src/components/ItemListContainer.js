import ItemCount from './ItemCount'
import React,{useEffect} from 'react'
import Itemlist from './Itemlist';
import { useParams} from 'react-router-dom';
import { useState } from 'react';
import Spinner from './Spinner'
import { toast } from "react-toastify";

const ItemListContainer = () => {
    const [item, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCompany } = useParams();

    useEffect(() => {
        fetch('https://6208563822c9e90017d33067.mockapi.io/api/v1/carro')
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            setItems(res);
        })
        .catch(() => {
            toast.log("error cargando");
        })
        .finally(() => {
            setLoading(false);
        });

     
    }, [idCompany])

    return (
        <div style={{ marginTop: '20px' }}>
           
            <main>
                     
                <ItemCount 
                stock={20}
                initials={10}
                />                   
                
            </main>

    )
            {loading ? <Spinner /> : <Itemlist items={item} />}
        </div>
    );
};



export default ItemListContainer