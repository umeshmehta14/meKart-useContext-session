import React,{useContext, useState} from 'react'
import { CartContext } from '../contexts/CartContext';

const AddToCartBtn = ({SelectedItem}) => {
    const [clicked, setClicked] = useState(false)
  const { handleCartUpdate } = useContext(CartContext) ;

  return (
      <button
          disabled={clicked}
          onClick={() => {
            setClicked(true)
            handleCartUpdate(SelectedItem);
          }}
        >
          {clicked ? "Added to cart" : "Add to Cart"}
        </button>
  )
}

export default AddToCartBtn
