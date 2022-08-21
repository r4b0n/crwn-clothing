import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { SignOutUser } from '../../utils/firebase/firebase.utils';

import { Nav, Logo, NavLinks, NavLink } from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, showCartIcon, setShowCartIcon } = useContext(CartContext);
  const handleNavClick = (e) => {
    let nav_links = document.querySelectorAll('.gaYMAF');
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
      <Nav>
        <Logo onClick={handleNavClick} to='/'>
          <CrwnLogo />
        </Logo>
        <NavLinks>
          <NavLink onClick={handleNavClick} to='/shop'>
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as='span' className='active' onClick={SignOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink onClick={handleNavClick} to='/auth'>
              Sign In
            </NavLink>
          )}
          {showCartIcon && <CartIcon />}
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </Nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
