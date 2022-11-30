import Menu from "./Menu"
import React from "react";
function Header() {
    return(
      <header>
        <nav className="menu">
          {/* <img src="logo.svg"/> */}
          <Menu />
        </nav>
        
      </header>
    )
    
  }
  export default Header