import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Menu({ history }){    

    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggle = () => {        
        document.body.style.overflow = menuOpen ? "initial" : "hidden"
        setMenuOpen(!menuOpen)        
    }

    async function Logout(){        
        handleToggle();
        localStorage.clear();
    }

    return (
            <header>
                <div className="header-content">

                    <div id="logo">
                        <Link title="SunGlass" to="/">
                            <span className="part-one">Sun</span>
                            <span className="part-two">Glass</span >
                        </Link>
                    </div>

                    <div className={menuOpen ? 'menu-section on' : 'menu-section'}>
                        <div className="menu-toggle" onClick={handleToggle}>
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>
                        <nav>
                            <ul className="menu-list">
                                <li>
                                   <Link className="menu-item" onClick={Logout} to="/login">Log Out</Link>
                                </li>
                                <li>
                                    <Link className="menu-item" onClick={handleToggle} to="/dashboard">Home</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
}