import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import MenuLateral from '../../components/SideBar';
//import ClientClass from '../../models/Client';

export default function Dashboard(){  
 
    const [clientRegisterQuantity, setClientRegisterQuantity] = useState([]);
    const [productRegisterQuantity, setProductRegisterQuantity] = useState([]);

    useEffect(() => {
        async function loadClients(){
            let LocalClient = localStorage.getItem('@SunglassClientes');
            LocalClient = JSON.parse(LocalClient);
            
            let qtdCLiente = 0;

            if (LocalClient != null)
            {
                qtdCLiente = LocalClient.length;
            }

            setClientRegisterQuantity(qtdCLiente);
        }

        async function loadProducts(){
            let LocalProduct = localStorage.getItem('@SunglassProdutos');
            LocalProduct = JSON.parse(LocalProduct);

            let qtdProduct = 0;

            if (LocalProduct != null)
            {
                qtdProduct = LocalProduct.length;
            }

            setProductRegisterQuantity(qtdProduct);
        }
        
        loadProducts();        
        loadClients();

    }, []);


    return (
        <>  
            <Menu />

            <section className="section-container">

                <div className="section-content dashboard-section">

                    <MenuLateral />

                    <article>

                        <p className="title-page">Dashboard</p>

                        <div className="box-panel">

                            <div className="box-one">
                                <p className="title-box">
                                    Clientes Cadastrados 
                                </p>
                                <p className="text-box">
                                    {clientRegisterQuantity}
                                </p>

                                <Link className="btn-new" to="/cadastroCliente">» Cadastrar novo Cliente</Link>
                            </div>

                            <div className="box-two">    <p className="title-box">
                                    Produtos Cadastrados 
                                </p>
                                <p className="text-box">
                                   {productRegisterQuantity} 
                                </p>

                                <Link className="btn-new" to="/cadastroProduto">» Cadastrar novo Produto</Link>
                            </div>
                        </div>
                    
                    </article>
                </div>

            </section>

            <Footer />
        </>
    )
}