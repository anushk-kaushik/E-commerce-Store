import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.items.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => handleRemove(item)}>Remove</button>
        </div>
      ))}
      <p>Total: ${cart.total}</p>
    </div>
  );
};

export default Cart;
