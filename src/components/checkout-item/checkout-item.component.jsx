import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const { addItemToCart, removeItemFromCart, deleteItemFromcart } =
    useContext(CartContext);
  return (
    <div className='checkout-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='name'>{name}</div>
      <div className='quantity'>
        <span onClick={() => removeItemFromCart(item)}>
          <i className='fa-solid fa-minus'></i>
        </span>
        <span className='value'>{quantity}</span>
        <span onClick={() => addItemToCart(item)}>
          <i className='fa-solid fa-plus'></i>
        </span>
      </div>
      <div className='price'>{price}</div>
      <div className='remove-btn' onClick={() => deleteItemFromcart(item)}>
        <i className='fa-solid fa-trash-can'></i>
      </div>
    </div>
  );
};

export default CheckoutItem;
