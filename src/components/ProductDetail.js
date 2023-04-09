import AddToCartBtn from "./AddToCartBtn";
import { useParams } from "react-router-dom";

import { products } from "../data/productsDB";

export const ProductDetail = () => {
  const { productId } = useParams();

  const SelectedItem = products.find(({ id }) => id === parseInt(productId));
  return (
    <>
      <div
        style={{
          border: "1px solid gray",
          margin: "0.5rem",
          padding: "0.5rem"
        }}
      >
        <h2>
          {SelectedItem.name} <small> INR {SelectedItem.price} </small>
        </h2>
        <AddToCartBtn SelectedItem={SelectedItem}/>
      </div>
    </>
  );
};
