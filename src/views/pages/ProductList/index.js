import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import MenuLateral from '../../components/SideBar';

export default function ProductList(){    
    return (
        <>
            <Menu />

            <section className="section-container">

                <div className="section-content product-section">

                    <MenuLateral />

                    <article>

                        <p className="title-page">Produtos</p>

                        <Link className="btn-novo-cadastro" to='/cadastroProduto'>Cadastrar novo Produto</Link>

                        <div className="box-form">
                        
                        </div>
                    
                    </article>
                </div>

            </section>

            <Footer />
        </>
    )
}
