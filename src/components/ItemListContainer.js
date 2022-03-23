
import ItemCount from './ItemCount'
import products from './products';
import React,{useEffect} from 'react'
import Itemlist from './Itemlist';
import { useParams} from 'react-router-dom';
import { useState } from 'react';
import Spinner from './Spinner'

const ItemListContainer = () => {
    const [item, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idmodel } = useParams();

    useEffect(() => {
        setLoading(true);
        getdatos(idmodel)
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });

        return () => {
            setItems([]);
        };
    }, [idmodel]);

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

function getdatos(idmodel){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            if (!idmodel){            
                resolve(products)}
            else {let carros =    products.filter(item=>item.model ===idmodel);
                resolve(carros)}
                
        },2000);
    })

}

export default ItemListContainer