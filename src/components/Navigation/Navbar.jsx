import React from "react";
import Hamburger from "./Hamburger";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar(){
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () =>{
    setHamburgerOpen(!hamburgerOpen)
  }
  return(
    <div>
      <div className="navigation">
        <ul>
          <li>
          <Link to ="/">Home</Link>
          </li>
          <li>
          <Link to ="userposts">My listings</Link>
          </li>
          <li>
            <Link to ="messages">My messages</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen}/>
        </div>
      </div>
      
        
       
        </div>
      )
}




