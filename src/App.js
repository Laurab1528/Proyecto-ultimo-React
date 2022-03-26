//function App()=>{
   // return "hola mundo"
//}

import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'react-bootstrap'
import MiProvider from "./components/Context";





const App = () => {
  return(
    <Router className='App'>
      <MiProvider>
        <Header />
          <Container> 
            <NavBar />     
              <Main />       
            </Container>
      </MiProvider>   
      <Footer />    
      <ToastContainer />
    </Router>
  )
}


// export default
export default App
