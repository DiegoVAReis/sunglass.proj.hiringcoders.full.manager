import React, {useState} from 'react';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import MenuLateral from '../../components/SideBar';

export default function RegisterProduct({ history }){    

    const [nomeProduct, setNomeProduct] = useState('');
    const [descriptionProduct, setDescriptionProduct] = useState('');
    const [descriptionTecniqueProduct, setDescriptionTecniqueProduct] = useState('');
    const [categoryProduct, setCategoryProduct] = useState('');
    const [wordKeyProduct, setWordKeyProduct] = useState('');
    const [msgRetorno, setMsgRetorno] = useState('');
       
    async function handleSubmit(event) {
        event.preventDefault();

        if ((nomeProduct !== '') 
            && (descriptionProduct !== '')
            && (descriptionTecniqueProduct !== '')){

                const user_login_cadastro = localStorage.getItem('user');
                const id_registro = Math.random().toString(16).slice(2)

                let data = [{
                    id_registro,
                    nomeProduct,
                    descriptionProduct,
                    descriptionTecniqueProduct, 
                    categoryProduct, 
                    wordKeyProduct, 
                    user_login_cadastro
                }]

                let dadosGravados = localStorage.getItem('@SunglassProdutos');

                if (dadosGravados != null){
                    let dadosGravadosAux = JSON.parse(dadosGravados);
                    
                    console.log(dadosGravadosAux);
                    console.log(JSON.parse(dadosGravados).lenght);

                    for (var i in dadosGravadosAux) {
                        data.push(dadosGravadosAux[i]);
                    }

                }

                let convertStringData = JSON.stringify(data);

                localStorage.setItem('@SunglassProdutos', convertStringData);

                setMsgRetorno('Registro incluído com sucesso. Você será redirecionado para o DashBoard.');
                
                setTimeout(() => {
                    history.push('/dashboard');
                }, 1000)

            }else {
                setMsgRetorno('É necessário preencher pelo menos o Nome / Descrição e Descrição técnica');

                setTimeout(() => {
                    setMsgRetorno('')
                }, 3000)
            }
    }

    return (
        <>
            <Menu />

            <section className="section-container">

                <div className="section-content register-product-section">

                    <MenuLateral />

                    <article>

                        <p className="title-page">Cadastro de Produtos</p>

                        <div className="box-form"> 

                            <p className={msgRetorno ? 'msg-retorno-on' : 'msg-retorno-off'}>{msgRetorno}</p>

                            <form className="form-register" onSubmit={handleSubmit}>

                                <fieldset>
                                    <legend>Dados Principais:</legend>

                                    <div className="form-group form-group-big">
                                        <label htmlFor="nomeProduct">Nome do Produto:</label>
                                        <input 
                                            id="nomeProduct"
                                            type="text"
                                            placeholder=""
                                            value={nomeProduct}
                                            onChange={event => setNomeProduct(event.target.value)}
                                        />
                                    </div>

                                    <div className="form-group form-group-small">
                                        <label htmlFor="descriptionProduct">Descrição:</label>
                                        <input 
                                            id="descriptionProduct"
                                            type="text"
                                            placeholder=""
                                            value={descriptionProduct}
                                            onChange={event => setDescriptionProduct(event.target.value)}
                                        />
                                    </div>

                                    <div className="form-group form-group-medium">
                                        <label htmlFor="descriptionTecniqueProduct">Descrição Técnica:</label>
                                        <input 
                                            id="descriptionTecniqueProduct"
                                            type="text"
                                            placeholder=""
                                            value={descriptionTecniqueProduct}
                                            onChange={event => setDescriptionTecniqueProduct(event.target.value)}
                                        />
                                    </div>

                                    <div className="form-group form-group-small">
                                        <label htmlFor="categoryProduct">Categoria:</label>
                                        <input 
                                            id="categoryProduct"
                                            type="text"
                                            placeholder=""
                                            value={categoryProduct}
                                            onChange={event => setCategoryProduct(event.target.value)}
                                        />
                                    </div>

                                    <div className="form-group form-group-small">
                                        <label htmlFor="wordKeyProduct">Palavras-Chave:</label>
                                        <input 
                                            id="wordKeyProduct"
                                            type="text"
                                            placeholder=""
                                            value={wordKeyProduct}
                                            onChange={event => setWordKeyProduct(event.target.value)}
                                        />
                                    </div>

                                </fieldset>

                                <button type="submit" className="btn">Cadastrar</button>

                            </form>
                            
                        </div>
                    
                    </article>
                </div>

            </section>

            <Footer />
        </>
    )
}
