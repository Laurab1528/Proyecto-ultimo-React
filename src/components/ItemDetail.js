
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount';
const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(0);
    let navigate = useNavigate();

    const onAdd = (cantidad) => {
        setCantidad(cantidad);
        setTimeout(() => {
            navigate('/CartWidget');
        }, 3000);
    };
    return (
        <article className="itemDetail">
            <img src={item.imagen} alt="" />
            <div className="titulos">
                <h3>{item.model}</h3>
                <p>${item.Price}</p>
                <p>{item.color}</p>
                <ItemCount stock={item.stock} onAdd={onAdd} />
            </div>
            <p className="descripcion">{item.CompanyName}</p>
        </article>
    )
}

export default ItemDetail