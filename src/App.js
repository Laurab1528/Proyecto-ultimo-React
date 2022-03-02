//function App()=>{
   // return "hola mundo"
//}

import React from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'


const persona = {
  edad:23,
  nombre:"Juan",
  


}



const App = () => {
  return(<>
            <Header/>            
            <NavBar/>
            <ItemListContainer persona={persona}  />
            <Footer/>
            
        </>

  )
}


// export default
export default App
