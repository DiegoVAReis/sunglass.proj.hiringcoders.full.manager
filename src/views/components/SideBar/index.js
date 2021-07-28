import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SideBar(){  
    
    const [personLogged, setPersonLogged] = useState([]);

    useEffect(() => {
        async function loadLogin(){
            
            let personLogged = localStorage.getItem('user');

            setPersonLogged(personLogged);
        }
        
        loadLogin();

    }, []);
    

    return (
            <aside className="aside-bar">
                <div className="aside-content">

                    <p>
                        Olá <span>{personLogged},</span> <br />
                        Seja Bem-Vindo                        
                    </p>

                    <nav>
                        <ul className="menu-list">
                            <li>
                                <Link className="menu-item" to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link className="menu-item" to="/clientes">Clientes</Link>
                            </li>
                            <li>
                                <Link className="menu-item" to="/produtos">Produtos</Link>
                            </li>

                            {/* <li>
                                <Link className="menu-item" to="/dashboard"><FontAwesomeIcon icon={['fab', 'google']} /> Dashboard</Link>
                            </li>
                            <li>
                                <Link className="menu-item" to="/clientes"><FontAwesomeIcon icon="spinner" pulse /> Clientes</Link>
                            </li>
                            <li>
                                <Link className="menu-item" to="/produtos"><FontAwesomeIcon icon={['fab', 'google']}/> Produtos</Link>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </aside>
        )
}