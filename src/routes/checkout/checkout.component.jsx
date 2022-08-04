import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
