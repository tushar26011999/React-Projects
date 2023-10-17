import React from 'react';
const Navbar: React.FunctionComponent = () => {
  return (
    <nav className='container'>
        <div className="brand_logo">
        <img src='./images/brand_logo.png' alt='logo'/>
        </div>
        <ul>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
        <button id='login'>Login</button>
    </nav>
  )
}

export default Navbar