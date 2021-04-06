import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logIn } from '../../../Store/Reducers/user';
import classNames from 'classnames';
import './style.css';

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [subState, setSubmit] = useState(false);

  useEffect(() => {
    if ((/\S+@\S+\.(\S{2,6})$/.test(formState.username)) && (/(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}/g.test(formState.password))) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [formState]);

  const handleSubmit = event => {
    event.preventDefault();
    if (subState) dispatch(logIn(formState));
    setFormState({ username: '', password: '', });
    setSubmit(false);
    history.push("/");
  }

  const handleChange = event => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

// username: testAdmin@gmail.com
// password: 12345yuiopp

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
