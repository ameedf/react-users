import React from 'react';

const SecurityContext = React.createContext(
  {
    userName: 'anonymous',
    role: 'ROLE_ANONYMOUS'
  }
);

export default SecurityContext;