import React from 'react';
import './style.css';

const SignIn = () => {
  return (
    <form>
      <label>
        username:
          <input type="text" />
      </label>
      <label>
        password:
          <input type="password" />
      </label>
      <input type="submit" value="Отправить" />
    </form>
  )
}

export default SignIn;
