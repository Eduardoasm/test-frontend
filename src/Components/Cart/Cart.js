import { Table, Typography } from 'antd';
import React from "react"
import "./Cart.css"
import {
    ShoppingCartOutlined
  } from "@ant-design/icons";



export default function Cart({cartItems}){
    


    return(
        <div className="main1">
            <h1>
             <ShoppingCartOutlined /> Cart
            </h1>
                <div className="cart">
                <div className="keys">
                <h2 className="key"> Product </h2>
                <h2 className="key"> Quantity </h2>
                <h2 className="key"> Unit Price </h2>
                <h2 className="key"> Total </h2>
                </div>
            {
                cartItems?.map((item) => (
                    <div className="itemsCart">

                        <h3 className="items">{item.name}</h3>
                   
                        <h3 className="items">{item.amount}</h3>
                       
                        <h3 className="items">{item.unit_price}</h3>
                     
                        <h3 className="items">{item.amount * item.unit_price}</h3>
                    </div>
                ))
            }
            </div>
        </div>
    )
}
         
    
