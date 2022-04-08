import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='login'>
      <form className='Form'>
        <div className='logo-login'>
          <Logo />
        </div>
        <div className='form-group'>
          <input
            type='email'
            className='form-control'
            name='email'
            placeholder='Usuario'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            className='form-control'
            name='password'
            placeholder='Contraseña'
          />
        </div>
        <Link to='/paneldecontrol' className='btn btn-primary'>
          Acceder
        </Link>
      </form>
    </div>
  );
}

export default Login;
