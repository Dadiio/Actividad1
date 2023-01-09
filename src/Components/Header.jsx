import React from "react";
import MSideNav from "./SideNav";
import './HeaderCss.css';

const Header =() => {
  return (
    <div className="header">
        <div className="fila1">
            <h1> Biblioteca de Prestamos de la Actividad 1.</h1>
        </div>
        <div className="fila2">
            <h2>Buscar Libros</h2>
            <div className="busqueda">
                <input type="text" placeholder="Digite el nombre del libro" />
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <img src="./images/Books4.jpeg" alt="" />
        </div>        
    </div> 
    
  );
}

export default Header;