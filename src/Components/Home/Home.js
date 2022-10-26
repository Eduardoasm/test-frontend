import React from "react";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import { data } from "../../Data/data";
import "./home.css"
import { addItem, deleteItem } from "../../utils/controllers";
import { useState, useEffect } from "react";
import  Cart from "../Cart/Cart";


export default function Home() {
    
   const [cartItems, setCartItems] = useState(() => {
    const productsInLocalStorage = localStorage.getItem("cartProducts");
    return productsInLocalStorage ? JSON.parse(productsInLocalStorage) : [];
  });

  console.log(cartItems)

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
}, [cartItems]);

  const dataInfo = data.products


  return (
    <div>
      <Navbar />
      <div className="mainHome">
        <div className="containerCards" >
            {dataInfo?.map((e) => (
            <div className="cardsHome">
            <Products 
            name={e.name}
            stock={e.stock}
            unit_price={e.unit_price}
            image={e.image}
            safeProduct={()=>addItem(e, cartItems, setCartItems)}
            />

          </div>
        ))}
        </div>
        <div className="containerTable">
              <Cart 
              cartItems={cartItems}/>
        </div>
      </div>
    </div>
  );
}
