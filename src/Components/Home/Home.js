import React from "react";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import { data } from "../../Data/data";
import "./home.css"
import { addItem } from "../../utils/controllers";
import { useState, useEffect } from "react";
import  Cart from "../Cart/Cart";


export default function Home() {
    
   const [cartItems, setCartItems] = useState(() => {
    const productsInLocalStorage = localStorage.getItem("cartProducts");
    return productsInLocalStorage ? JSON.parse(productsInLocalStorage) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
}, [cartItems]);


  const dataInfo = data.products

  const total = cartItems.reduce(
    (acumulador, actual) => acumulador + actual.amount * actual.unit_price
    , 0 
    )

    console.log(total)
  

  return (
    <div>
      <Navbar />
      <div className="mainHome">
        <div className="containerCards" >
            {dataInfo?.map((e) => (
            <div className="cardsHome">
            <Products 
            key={e.name}
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
              cartItems={cartItems}
              setCartItems={setCartItems}
              total={total}
              />
        </div>
      </div>
    </div>
  );
}
