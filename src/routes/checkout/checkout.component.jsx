import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>Prodcut</div>
        <div className='header-block'>Description</div>
        <div className='header-block'>Quantity</div>
        <div className='header-block'>Price</div>
        <div className='header-block'>Remove</div>
      </div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => {
          return <CheckoutItem key={item.id} item={item} />;
        })
      ) : (
        <h2>No items in cart.</h2>
      )}
      <span className='total'>Total: 0</span>
    </div>
  );
};

export default Checkout;
