
import React, { useState,useContext  } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { contexto } from './Context';

const ItemDetail = ({ item }) => {    

    const { addItem } = useContext(contexto);
    const [cantidad, setCantidad ]= useState(0)

    const [seleccionado,setSeleccionado] = useState(false)

    const onAdd = (cant) => {
        console.log('Añadir al carrito',cant)
        setSeleccionado(cant);        
        
        addItem(item, cant); 
    }


    ;
;
    return (
        <article className="itemDetail">
            <img src={item.imagen} alt="" />
            <div className="titulos">
                <h3>{item.model}</h3>
                <p>${item.Price}</p>
                <p>{item.color}</p>
               { 

               cantidad=== 0?
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                : 
                <Link to='/Cart'>Terminar compra</Link>
               }
            </div>
            <p className="Company">{item.CompanyName}</p>
        </article>
    )
}

export default ItemDetail