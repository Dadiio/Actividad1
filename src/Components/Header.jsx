import React, { useState } from "react";
import Card from "./Card";
import './HeaderCss.css';
import axios from "axios";


const Header =() => {
  const [busqueda, setBusqueda]=useState("");
  const[datosLibro, setDatos]= useState([]);
  const busquedaLibro=(evt) =>{
      if(evt.key ==="Enter")
      {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+busqueda+'&key=AIzaSyB9a98Zr5nHaJbuU7rRiJ1Bp3iRu005PA0')
        .then(res=>setDatos(res.data.items))
        .catch(err=>console.log(err))
      }
  }
  return (
    <>
    <div className="header">
        <div className="fila1">
            <h1> Biblioteca de Prestamos de la Actividad 1.</h1>
        </div>
        <div className="fila2">
            <h2>Buscar Libros</h2>
            <div className="busqueda">
                <input type="text" placeholder="Digite el nombre del libro" 
                 value={busqueda} onChange={e=>setBusqueda(e.target.value)} onKeyDown={busquedaLibro} />
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <img src="./images/Books4.jpeg" alt="" />
        </div>          
    </div> 
      <div className="container">
        <Card libro={datosLibro} />      
      </div>    
    </>
  );
}

export default Header;