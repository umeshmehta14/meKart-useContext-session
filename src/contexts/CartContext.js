import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);


  const CheckQuantity = (item) => {
    return item.filter((curElement) => curElement.quantity !== 0);
  };

  const handleCartUpdate = (item, decrease) => {
    if (decrease === "remove") {
      const removedItemArray = cart.filter(({ id }) => id !== item.id);
      setCart(removedItemArray);
    } else {
      const existingItem = cart.find(({ id }) => id === item.id);
      if (existingItem) {
        // If the item is already in the cart, update its quantity
        const addQuantity = cart.map((cartItem) =>
          cartItem.id === item.id
            ? decrease
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );

        const updatedItems = CheckQuantity(addQuantity);
        console.log(updatedItems);

        setCart(updatedItems);
      } else {
        item["quantity"] = 1;
        setCart([...cart, item]);
      }
    }
  };
  console.log(cart);

  return (
    <CartContext.Provider value={{ cart, handleCartUpdate }}>
      {children}
    </CartContext.Provider>
  );
}
