//function App()=>{
   // return "hola mundo"
//}

import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';







const App = () => {
  return(
    <Router className='App'>
      <Header />
      <NavBar />     
      <Main />       
      <Footer />        
    </Router>
  )
}


// export default
export default App
