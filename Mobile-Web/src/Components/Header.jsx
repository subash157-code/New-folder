import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

const Header = ({cart, onLogout }) => {
  const [count,setCount]=useState(0);
  const [clicked, setClicked] = useState(false);
  useEffect(()=>{
    setCount(cart.length);

  },[cart]);
  return (
     <div className='nav-bar'>
      <p className='header-icon'>Laptop Shop</p> 
       {/* <img src="https://www.shutterstock.com/image-vector/helmet-explore-word-graphic-design-260nw-593629619.jpg" alt="" className='header-icon' /> */}
        <ul className='header-design'>
            <li className='linkOne'><Link to="/Home" className='l' >Home</Link></li>
            <li><Link to="/explore" className='l'>Explore</Link></li>
            <li><Link to="/cart" className='l'>Cart<span className='CountDisplay'>{count>0? count:'🛒'}</span></Link></li>
            <li><Link to="/Contact" className='l'>Contact</Link></li>
    

        </ul>
       
      </div>
   
    

   
  )
}

export default Header
