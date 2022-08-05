import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.map((item) => {
        const { id, name, quantity } = item;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span onClick={() => removeItemFromCart(item)}>
              <i className='fa-solid fa-minus fa-lg'></i>
            </span>
            <span>{quantity}</span>
            <span onClick={() => addItemToCart(item)}>
              <i className='fa-solid fa-plus fa-lg'></i>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
