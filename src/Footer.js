import React from 'react';

const Footer = ({length}) => {
  const year = new Date();
  return (
    <div className='footer'>NO OF ITEMS : {length}</div>
  );
};

export default Footer;
