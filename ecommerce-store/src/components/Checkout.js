import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const [shippingInfo, setShippingInfo] = useState({ address: '', city: '', zip: '' });
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiry: '', cvv: '' });
  const cart = useSelector((state) => state.cart);

  const handleShippingChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process checkout
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Shipping Information</h2>
      <input name="address" placeholder="Address" onChange={handleShippingChange} />
      <input name="city" placeholder="City" onChange={handleShippingChange} />
      <input name="zip" placeholder="ZIP Code" onChange={handleShippingChange} />
      
      <h2>Payment Information</h2>
      <input name="cardNumber" placeholder="Card Number" onChange={handlePaymentChange} />
      <input name="expiry" placeholder="Expiry Date" onChange={handlePaymentChange} />
      <input name="cvv" placeholder="CVV" onChange={handlePaymentChange} />

      <button type="submit">Place Order</button>
    </form>
  );
};

export default Checkout;
