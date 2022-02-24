import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../components/Logo';

function NavBar() {
  return (
    <div className='navbar'>
      <div className='logo-navbar'>
        <Link to='/dashboard'>
          <Logo />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
