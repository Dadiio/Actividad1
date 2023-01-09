import React from "react";
import "./CardCss.css"
import axios from "axios";


const Card =({libro}) =>{
  console.log(libro)
  return (
    <>
    {
      libro.map((item)=>{
        let miniImg =item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let precio = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if(miniImg!= undefined && precio!=undefined) 
        {
          return (
            <>
            <div className="card">
              <img src={miniImg} alt="#" />
              <div className="bottom">
                <h3 className="titulo">{item.volumeInfo.title}</h3>
                <p className="precio">US&#65284;{precio}</p>
              </div>
            </div> 
            </>
          )
        }        
      })
    }   
    </>
  )
}

export default Card