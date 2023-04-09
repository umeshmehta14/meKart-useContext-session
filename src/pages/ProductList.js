import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "..";
import { ProductDetail } from "../components/ProductDetail";

export function ProductList({ products }) {
  const { handleCartUpdate } = useContext(CartContext);
  return (
    <div>
      {products.map((item) => {
        const { id, name, price } = item;

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
            <NavLink to={`/productDetails/${id}`}>View Details</NavLink>
          </div>
        );
      })}
    </div>
  );
}
