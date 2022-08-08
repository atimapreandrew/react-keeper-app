import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <small>Copyright ⓒ {year} - Andrew Atimapre</small>
    </footer>
  );
}

export default Footer;
