import React from "react";
import './ModalCss.css'

const Modal=({show,item,onClose}) =>{
    if (!show)
    {
        return null;
    }
    let miniImg =item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return (
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="cerrar" onClick={onClose}>
                        <i class="fas fa-times" />
                    </button>
                    <div className="inner-box">
                        <img src={miniImg} alt="#" />
                        <div className="info">
                            <h1>{item.volumeInfo.title}</h1><br/>
                            <h3>{item.volumeInfo.authors}</h3><br/>
                            <h4> {item.volumeInfo.publisher}<span> {item.volumeInfo.publishedDate}</span></h4><br/>
                            <h4>ISBN 13 = {item.volumeInfo.industryIdentifiers[0].identifier} </h4> 
                            <h4>ISBN 10 = {item.volumeInfo.industryIdentifiers[1].identifier} </h4> 
                            <a href={item.volumeInfo.previewLink}><button>Mas</button></a>   
                                                    
                        </div>
                    </div>
                    <h4 className="descripcion">{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}

export default Modal;