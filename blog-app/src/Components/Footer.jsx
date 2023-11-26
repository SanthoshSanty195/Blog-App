import React from 'react';

const Footer = () => {
  return (
    <footer className="navbar navbar-dark mt-auto" style={{background: "green"}}>
      <div className="container">
        <span className="navbar-text" style={{color:"black"}}>
          Your Blog &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;