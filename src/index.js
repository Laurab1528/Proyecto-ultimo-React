//1)necesitamos la variable react en scope
import React from "react"
// Necesitamos la variable ReactDom en scope
import ReactDOM from "react-dom"
import App from "./App"
import "./estilo.scss"
import "bootstrap-icons/font/bootstrap-icons.css"

// Necesitamos un componente en scope
//function App(){
   // return "hola mundo"
//}

//Necesitamos poner el componente en el DOM
ReactDOM.render(<App/>,document.getElementById("root"))