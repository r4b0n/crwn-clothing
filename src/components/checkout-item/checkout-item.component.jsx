import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(item);
  const addItemHandler = () => addItemToCart(item);
  const removeItemHandler = () => removeItemFromCart(item);
  return (
    <div className='checkout-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='name'>{name}</div>
      <div className='quantity'>
        <span onClick={removeItemHandler}>
          <i className='fa-solid fa-minus'></i>
        </span>
        <span className='value'>{quantity}</span>
        <span onClick={addItemHandler}>
          <i className='fa-solid fa-plus'></i>
        </span>
      </div>
      <div className='price'>{price}</div>
      <div className='remove-btn' onClick={clearItemHandler}>
        <i className='fa-solid fa-trash-can'></i>
      </div>
    </div>
  );
};

export default CheckoutItem;
