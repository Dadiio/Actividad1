import React, { useState } from "react";
import "./CardCss.css"
import Modal from "./Modal";


const Card =({libro}) =>{
  const [mostrar, setMostrar]=useState(false);
  const [itemLibro,setItem] = useState(); 
  console.log(itemLibro) 
  return (
    <>
    {
      libro.map((item)=>{
        let miniImg =item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let precio = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if(miniImg != undefined && precio !=undefined) 
        {
          return (
            <>
            <div className="card" onClick={()=>{setMostrar(true);setItem(item)}}>
              <img src={miniImg} alt="#" />
              <div className="bottom">
                <h3 className="titulo">{item.volumeInfo.title}</h3>
                <p className="precio">US&#65284;{precio}</p>
              </div>
            </div> 
            <Modal show={mostrar} item={itemLibro} onClose={() => setMostrar(false)} />
            </>
          )
        }        
      })
    }   
    </>
  )
}

export default Card