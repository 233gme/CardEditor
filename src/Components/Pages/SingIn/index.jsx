import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './style.css';

const SignIn = () => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [subState, setSubmit] = useState(false);

  // Checking username and password
  useEffect(() => {
    if ((/\S+@\S+\.(\S{2,6})$/.test(formState.username)) && (/(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}/g.test(formState.password))) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [formState]);

  const handleSubmit = event => {
    event.preventDefault();
    setFormState({ username: '', password: '', });
    setSubmit(false);
    console.log('[SingIn] - ',formState)
  }

  // Added values to the formState
  const handleChange = event => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
          <input type="email"
          name='username'
          value={formState.username}
          onChange={handleChange}
          required />
      </label>
      <label>
        Password:
          <input type="password"
          name='password'
          value={formState.password}
          onChange={handleChange}
          required />
      </label>
      <button className={classNames('buttons', { 'btn_disable': !subState })}>Sing in</button>
    </form>
  );
}

export default SignIn;
