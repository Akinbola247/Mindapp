import React from "react";

function Footer(prop) {
  const year = new Date().getFullYear();
  const customStyle = {
    position: 'fixed',
    left: 0,
    bottom: 0
 }
const customStyle2 = {
    position: 'static'
}

  return (
    <footer className="footer" style ={prop.checkLogStat ? customStyle2: customStyle} >   
      <div className="icon">
      <i className="fa-brands fa-twitter"></i>
      <i className="fa-brands fa-facebook-messenger"></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-solid fa-envelope"></i>
      <p className="copy">Copyright ⓒ {year}</p>
      </div>
    </footer>
    
  );
}

export default Footer;


