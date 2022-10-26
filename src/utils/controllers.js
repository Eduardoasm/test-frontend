

export const addItem = (productItem, cartItems, setCartItems) => {
  const itemInCart = cartItems.find(
    (productItemCart) => productItemCart.name === productItem.name
  );

  if (itemInCart) {
    setCartItems(
      cartItems.map((productInCart) => {
        if (productInCart.name === productItem.name) {
            if(productItem.stock === 0){
                return "no have stock to add"
            }
          return { ...itemInCart, amount: itemInCart.amount + 1 && productItem.stock -1};
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
    setCartItems((productItemCart) => {
      if (productItemCart.name === productItem.name) {
        return { ...itemInCart, amount: itemInCart.amount - 1 && productItem.stock +1};
      }
      return productItemCart;
    });
  }
};

