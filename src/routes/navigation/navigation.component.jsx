import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
  const handleNavClick = (e) => {
    let nav_links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < nav_links.length; i++) {
      nav_links[i].classList.remove('active');
    }
    e.target.classList.add('active');
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
          <Link onClick={handleNavClick} className='nav-link' to='/sign-in'>
            Sign In
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
