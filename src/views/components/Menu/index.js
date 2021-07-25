import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu(){    
    return (
            <header>
                <div className="header-content">

                    <div id="logo">
                        <Link title="SunGlass" to="/">
                            <span className="part-one">Sun</span>
                            <span className="part-two">Glass</span >
                        </Link>
                    </div>

                    <div className="menu-section">
                        <div className="menu-toggle">
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>
                        <nav>
                            <ul className="menu-list">
                                <li>
                                   <Link className="menu-item" to="/">Log Out</Link>
                                </li>
                                <li>
                                    <Link className="menu-item" to="/dashboard">Home</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
}