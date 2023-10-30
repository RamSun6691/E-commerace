import React, { useState } from "react";
import { useCartContext } from "../context/cart_context";
import PriceFormating, { } from "../helpers/PriceFormating"
import CartAmountToggle from "./CartAmountToggle"
import { FaTrash } from "react-icons/fa";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrement } = useCartContext();

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>Color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      {/* Price */}
      <div className="cart-hide">
        <p>
            <PriceFormating price={price} />
        </p>
      </div>
      {/* Quantity */}
      <CartAmountToggle
      amount={amount}
      setDecrease={() => setDecrease(id)}
      setIncrease={() => setIncrement(id)}
      />
      <div className="cart-hide">
        <p>
            <PriceFormating price={price *amount} />
        </p>
      </div>
      <div>
        <FaTrash className="remove_icon" onClick={()=>removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
