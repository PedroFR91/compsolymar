import React from 'react';
import Logo from './Logo';

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
        <button type='submit' className='btn btn-primary'>
          Acceder
        </button>
      </form>
    </div>
  );
}

export default Login;
