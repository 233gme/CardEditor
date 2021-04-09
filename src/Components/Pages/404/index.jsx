import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <h2 style={{ textAlign: 'center' }}>Page Not Found</h2>
      <h3 style={{ textAlign: 'center', marginTop: '25px' }}><Link to='/'>Home Page</Link></h3>
    </Fragment>
  )
};

export default NotFound;
