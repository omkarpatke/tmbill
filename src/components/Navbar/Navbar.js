import React from 'react';
import SubNavbar from '../SubNavbar/SubNavbar';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <SubNavbar />
    <div className="navbar">
        <div className="icon-or-headline">
            <img src="https://tmbill.com/img/tmbill-logo.svg" alt="tmbill-logo" />
        </div>
            <div className="nav-links">
                <div className="link link-active">Home</div>
                <div className="link">Products</div>
                <div className="link">Outlet Type <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg></div>
                <div className="link">Why TMBill <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg></div>
                <div className="link">Out Presence</div>
                <div className="link">Become A Partner</div>
                <div className="link">Contact Us</div>
            </div>
    </div>
    </>
  )
}

export default Navbar