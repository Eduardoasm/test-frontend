import React from "react"
import "./navbar.css"
import imgAlternova from "../../Imagenes/alternova.png"

export default function Navbar(){
    return(
        <div className="main">
            <div className="container">
                <div>
                <img src={imgAlternova} className="imagenAlternova" alt="imagen" width="300px"/>
                </div>
                <div className="title">
                <h1>Alternova Shop</h1>
                </div>
            </div>
        </div>
    )
}