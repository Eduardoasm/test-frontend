import Swal from "sweetalert2";

export const addItem = (productItem, cartItems, setCartItems) => {
  const itemInCart = cartItems.find(
    (productItemCart) => productItemCart.name === productItem.name
  );

  if (productItem.stock === 0) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No have stock for add",
    });
  }
  if (itemInCart) {
    setCartItems(
      cartItems.map((productInCart) => {
        if (productInCart.name === productItem.name) {
          return { ...itemInCart, amount: itemInCart.amount + 1 };
        }
        return productInCart;
      })
    );
  } else {
    setCartItems([...cartItems, { ...productItem, amount: 1 }]);
  }
};

export const deleteItem = (productItem, cartItems, setCartItems) => {
  const itemInCart = cartItems.find(
    (productItemCart) => productItemCart.name === productItem.name
  );

  if (itemInCart.amount === 1) {
    setCartItems(
      cartItems.filter((productItemCart) => productItemCart !== productItem)
    );
  } else {
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
