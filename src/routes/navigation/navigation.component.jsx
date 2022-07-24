import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { SignOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const nav_links = document.querySelectorAll('.nav-link');

  const handleNavClick = (e) => {
    for (var i = 0; i < nav_links.length; i++) {
      nav_links[i].classList.remove('active');
    }
    e.target.classList.add('active');
  };

  const { currentUser } = useContext(UserContext);

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
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
