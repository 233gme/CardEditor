import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const WithLoadingDelay = props => {
  const [state, setstate] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setstate(
        true
      )
    }, 2000);
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={classNames(props.myClass, { 'preloader': !state })}>
      {state && props.children}
    </div>
  )
};

export default WithLoadingDelay;