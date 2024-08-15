// Things to build : home, about, projects, education, achievements, contact
import React from 'react';
import './navBar.css';

const NavBar = () => {
    return (
        <div className='navBar'>
            {/* <ul className="menuItems">
                <li className='nav-bar'><a href='#'>Home</a></li>
                <li className='nav-bar'><a href='#'>About</a></li>
                <li className='nav-bar'><a href='#'>Education</a></li>
                <li className='nav-bar'><a href='#'>Skills</a></li>
                <li className='nav-bar'><a href='#'>Projects</a></li>
                <li className='nav-bar'><a href='#'>Contact</a></li>
            </ul> */}

            <div className='navbar'>
                {/* <h1>Portfolio</h1> */}
                <a href='#' style={{fontSize:'13px', textDecoration:'none'}}><h1>Portfolio</h1></a>
            </div>
            <div>
            <ul className="menuItems">
                <li className='nav-bar'><a href='#'>About</a></li>
                <li className='nav-bar'><a href='#'>Education</a></li>
                <li className='nav-bar'><a href='#'>Skills</a></li>
                <li className='nav-bar'><a href='#'>Projects</a></li>
                <li className='nav-bar'><a href='#'>Contact</a></li>
            </ul>
            </div>
        </div>
    );
};

export default NavBar;