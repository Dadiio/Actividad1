import React from "react";
import "./CardCss.css"
import axios from "axios";


const Card =({libro}) =>{
  console.log(libro)
  return (
    <>
    {
      libro.map((item)=>{
        return (
          <>
          <div className="card">
            <img src="./images/portada.png" alt="#" />
            <div className="bottom">
              <h3 className="titulo">The book of mind</h3>
              <p className="precio">RD&#65284;3290</p>
            </div>
          </div> 
          </>
        )
      })
    }   
    </>
  )
}

export default Card