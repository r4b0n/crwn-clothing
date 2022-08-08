import { useContext, useEffect } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const {
    cartItems,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    showCartIcon,
    setShowCartIcon,
  } = useContext(CartContext);
  let nav_links = document.querySelectorAll('.nav-link');
  for (var i = 0; i < nav_links.length; i++) {
    nav_links[i].classList.remove('active');
  }
  useEffect(() => {
    if (isCartOpen) {
      setIsCartOpen(false);
    }
    if (showCartIcon) {
      setShowCartIcon(false);
    }
  }, [isCartOpen, setIsCartOpen, showCartIcon, setShowCartIcon]);
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
      <span className='total'>Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
