import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { SignOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, showCartIcon, setShowCartIcon } = useContext(CartContext);
  const handleNavClick = (e) => {
    let nav_links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < nav_links.length; i++) {
      nav_links[i].classList.remove('active');
    }
    e.target.classList.add('active');
    if (!showCartIcon) {
      setShowCartIcon(true);
    }
  };
  return (
    <Fragment>
      <nav>
        <Link onClick={handleNavClick} className='logo' to='/'>
          <CrwnLogo />
        </Link>
        <div className='nav-links'>
          <Link onClick={handleNavClick} className='nav-link' to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className='nav-link active' onClick={SignOutUser}>
              Sign Out
            </span>
          ) : (
            <Link onClick={handleNavClick} className='nav-link' to='/auth'>
              Sign In
            </Link>
          )}
          {showCartIcon && <CartIcon />}
        </div>
        {isCartOpen && <CartDropdown />}
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
