import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function Cart() {
  const { cart, handleCartUpdate } = useContext(CartContext);
  return (
    <div>
      {cart.length === 0 && <h2> Cart empty. Why don't you buy something </h2>}
      {cart.map((item) => {
        const { id, name, price, quantity } = item;
        return (
          <div
            key={id}
            style={{
              border: "1px solid gray",
              margin: "0.5rem",
              padding: "0.5rem"
            }}
          >
            <h2>
              {name} <small> INR {price} </small>
            </h2>
            <small>x{quantity}</small>
            <p>
              <button onClick={() => handleCartUpdate(item)}>+</button>
              <button onClick={() => handleCartUpdate(item, true)}>-</button>
              <p>
                {item.quantity > 1 && (
                  <button onClick={() => handleCartUpdate(item, "remove")}>
                    Remove Item
                  </button>
                )}{" "}
              </p>
            </p>
          </div>
        );
      })}
      <h3>
        {cart.length !== 0 &&
          `Total Price: ${cart.reduce(
            (total, item) => (total += item.price * (item.quantity || 1)),
            0
          )}`}
      </h3>
    </div>
  );
}
