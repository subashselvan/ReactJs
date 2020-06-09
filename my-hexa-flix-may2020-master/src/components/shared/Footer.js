import React from 'react';
import Menu from './Menu';

//Comp with Anonymous function
const Footer = function(){
  const year = 2020;
  
  let footerStyles = {
    copyrightStyle: {
      backgroundColor: 'red',
      padding: '10px',
      color: '#fff',
      fontSize: '20px'
    },
    lockdownStyle: {
      backgroundColor: 'green',
      padding: '10px',
      color: '#fff',
      fontSize: '20px'
    }
  }
 
  return(
    <div style={{textAlign: 'center'}}>
      <hr />
      <Menu />
      <p style={footerStyles.copyrightStyle}>Copyright {year} | Arun </p>
      <p style={footerStyles.lockdownStyle}>Built happily during Lockdown</p>
      <br/><br/>
      <br/><br/>
    </div>
  )
}

export default Footer;