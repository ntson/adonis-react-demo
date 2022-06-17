import React from 'react';

const Auth = ({ children, isVisible }) => {
  return isVisible ? <>{children}</> : null;
};

export default Auth;
