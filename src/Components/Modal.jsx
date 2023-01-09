import React from "react";
import './ModalCss.css'

const Modal=(mostrar,item) =>{
    return (
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="cerrar">
                        <i class="fas fa-times" />
                    </button>
                    <div className="inner-box">
                        <img src="./images/portada.png" alt="#" />
                        <div className="info">
                            <h1>PRueba React</h1><br/>
                            <h3>otra prueba</h3><br/>
                            <h4> otra mas <span>2016-04-21</span></h4><br/>
                            <a href="#"><button>Mas</button></a>
                        </div>
                    </div>
                    <h4 className="descripcion">lo que sea</h4>
                </div>
            </div>
        </>
    )
}

export default Modal;