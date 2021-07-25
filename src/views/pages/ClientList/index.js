import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import MenuLateral from '../../components/SideBar';

export default function ClientList(){    
    return (
        <>
            <Menu />

            <section className="section-container">

                <div className="section-content client-section">

                    <MenuLateral />

                    <article>

                        <p className="title-page">Clientes</p>

                        <Link className="btn-novo-cadastro" to='/cadastroCliente'>Cadastrar novo Cliente</Link>

                        <div className="box-form">

                            
                        </div>
                    
                    </article>
                </div>

            </section>

            <Footer />
        </>
    )
}