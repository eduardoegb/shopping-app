import React from 'react';
import Cart from './Cart';
import Home from './Home';

const View = ({ activeTab }) => {
  switch (activeTab) {
    case 'home':
      return <Home />;

    case 'cart':
      return <Cart />;

    default:
      break;
  }
};

export default View;
