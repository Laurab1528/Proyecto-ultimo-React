import  {Container} from "react-boostrap"
import ItemCount from "./ItemCount";
import { useEffect } from "react";

const itemList= () =>{
    const [loading,Setloading]=useState(True)
    const [producto, Setproductos]=useState([])
    useEffect(() =>{
        Consolo.log("Ejecutando Useffect")
        const pedido=new Promise ( (res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },5000)
        })
        pedido
        .then((resultado)=>{
            console.log("Estuvo bien")
            Setproductos(resultado)  
        })
        .catch((error)=>{
            console.log("estuvo mal")
        })    
    },[])
    
    return(
    <container as="main">
        <h2>Bienvenido!</h2>
        <button onclick={()=>Setloading(!loading)}>toggle</button>
        <ul>
            {products.map((products) => {
                return  <li key={products.id}> {products.producto}</li>})}
        </ul>
        <ItemCount stock={20}
            initials={10}/>
    </container>);
}

export default ItemList