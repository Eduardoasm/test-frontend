import React from "react";
import "./Cart.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { deleteItem } from "../../utils/controllers";
import { Button } from "antd";


export default function Cart({ cartItems, setCartItems, total, json }) {

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(json(cartItems, total))
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };
  
  return (
    <div className="main1">
      <h1>
        <ShoppingCartOutlined /> Cart
      </h1>
      <div className="cart1">
        <div className="keys">
          <h2 className="key"> Product </h2>
          <h2 className="key"> Quantity </h2>
          <h2 className="key"> Unit Price </h2>
          <h2 className="key"> Total </h2>
        </div>
        {cartItems?.map((item) => (
          <div className="itemsCart" key={item.name}>
            <div className="left">
              <div className="nameItem">
                <h3 className="item">{item.name}</h3>
              </div>
              <div className="amount">
                <h3 className="item">{item.amount}</h3>
              </div>

              <div className="priceItem">
                <h3 className="item">{item.unit_price}</h3>
              </div>
              <div className="totalItem">
                <h3 className="item">{item.amount * item.unit_price}</h3>
              </div>
              <div className="buttons">
                <Button
                  danger
                  type="text"
                  className="buttonDelete"
                  onClick={() => deleteItem(item, cartItems, setCartItems)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lastContainer">
        <div className="totalOrder">
          <h2>Total order price</h2>
          <h1>{total}</h1>
        </div>
        <div className="order">
          <h2>Create order</h2>
          <Button type="primary" onClick={()=> exportData}>
            here
          </Button>
        </div>
      </div>
    </div>
  );
}
