
import ItemCount from './ItemCount'
import products from './products';
import React,{useEffect} from 'react'
import Itemlist from './Itemlist';
import { useParams } from 'react-router-dom';


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
const ItemListContainer = (props) => {
    const [items,setItems]=React.useState([]);
    const {idmodel}=useParams();
    useEffect(() => {
        
        getdatos(idmodel)
        .then(respuestaPromise=> setItems(respuestaPromise))
    },[idmodel]);
    
 

    
    
    return(
        <main>
            <h2> Bienvenido {props.persona.nombre}!</h2>
            <h2> Tu edad es: {props.persona.edad}</h2>            
            <ItemCount 
            stock={20}
            initials={10}
            />    
            <Itemlist items={items}  /> 
            
        </main>

    )
}
export default ItemListContainer