import React,{ useState } from 'react'
import './Navbar.css'
import { Assets } from '../../Assets/Assets';
const Navbar = () => {
   const [underline,setunderline]=useState("menu");
    return ( 
       <div className='Navbar'>
        <img src={Assets.logo} alt="" className="logo"/>
        <ul className="Navbar-Menu">
          <li onClick={()=>setunderline("home")}className={underline==="home"?"active":""}>home</li>
          <li onClick={()=>setunderline("menu")} className={underline==="menu"?"active":""}>menu</li>
          <li onClick={()=>setunderline("About-us")}className={underline==="About-us"?"active":""}>About-us</li>
          <li onClick={()=>setunderline("contact-us")} className={underline==="contact-us"?"active":""}>contact us</li>
        </ul>
          <div className="btn">
          <button class="buttn">Sign in</button>
        </div>
       </div>
     )
}
 
export default Navbar;