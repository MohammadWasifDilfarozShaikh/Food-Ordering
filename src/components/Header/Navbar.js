import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSidebarContext } from '../../context/sidebarContext';
function Navbar() {
  const {openSidebar} = useSidebarContext();
  const [scrolled , setScrolled] = useState(false);

  const handlescroll = () => {
    const offset = window.scrollY;
     
    if (offset > 60) {
      setScrolled(true);

    }else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handlescroll);
  })
  return (
    <nav className={`navbar  bg-info-subtle w-100 ${scrolled ? 'position-fixed top-0' : ''} `}>
      <div className="container-fluid">
        <Link className="navbar-brand" to={'/'}>FOOD WEB LOGO</Link>
        <button className="navbar-toggler"  onClick={() => openSidebar()} type="button"    >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar