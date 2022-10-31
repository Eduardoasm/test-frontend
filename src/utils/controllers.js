import Swal from "sweetalert2";
import { data } from "../Data/data";

const dataInfo = data.products

export const addItem = (productItem, cartItems, setCartItems) => {
  if (productItem.stock === 0) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No have stock for add",
    });
  }

  const itemInCart = cartItems.find(
    (productItemCart) => productItemCart.name === productItem.name
  );

  if (itemInCart) {
    console.log(productItem.stock = productItem.stock -1)
    setCartItems(
      cartItems.map((productInCart) => {
        if (productInCart.name === productItem.name) {
          return { ...itemInCart, amount: itemInCart.amount + 1 };
        }
        return productInCart
      })
    );
  } else {
    console.log(productItem.stock = productItem.stock -1)
    setCartItems([...cartItems, { ...productItem, amount: 1 }]);
  }
};

export const deleteItem = (productItem, cartItems, setCartItems) => {
  const itemInCart = cartItems.find(
    (productItemCart) => productItemCart.name === productItem.name
  );
  
  if (itemInCart.amount === 1) {
    const dataHome = dataInfo.find(e => {
      if(e.name === productItem.name){
        return e
      }
    })
    console.log(dataHome.stock = dataHome.stock +1)
    setCartItems(
      cartItems.filter((productItemCart) => productItemCart !== productItem)
    );
  } else {
    const dataHome = dataInfo.find(e => {
      if(e.name === productItem.name){
        return e
      }
    })
    console.log(dataHome.stock = dataHome.stock +1)
    setCartItems(
      cartItems.map((productItemCart) => {
        if (productItemCart.name === productItem.name) {
          return { ...itemInCart, amount: itemInCart.amount - 1 };
        }
        return productItemCart;
      })
    );
  }
};
