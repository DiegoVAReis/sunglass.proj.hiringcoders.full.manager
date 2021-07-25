import React, {useState} from 'react';
//import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import MenuLateral from '../../components/SideBar';

export default function RegisterClient({ history }){ 
    
    const [nomePerson, setNomePerson] = useState('');
    const [cpfPerson, setCpfPerson] = useState('');
    const [emailPerson, setEmailPerson] = useState('');
    const [phonePerson, setPhonePerson] = useState('');
    const [mobilePerson, setMobilePerson] = useState('');
    const [addressPerson, setAddressPerson] = useState('');
    const [addressNumberPerson, setAddressNumberPerson] = useState('');
    const [addressCepPerson, setAddressCepPerson] = useState('');
    const [addressCityPerson, setAddressCityPerson] = useState('');
    const [addressUFPerson, setAddressUFPerson] = useState('');
    const [addressComplementPerson, setAddressComplementPerson] = useState('');
    const [msgRetorno, setMsgRetorno] = useState('');
       
    async function handleSubmit(event) {
        event.preventDefault();


        if ((nomePerson !== '') 
            && (cpfPerson !== '')
            && (emailPerson !== '')){

                const user_login_cadastro = localStorage.getItem('user');
                const id_registro = Math.random().toString(16).slice(2)

                let data = [{
                    id_registro,
                    nomePerson,
                    cpfPerson,
                    emailPerson, 
                    phonePerson, 
                    addressPerson, 
                    addressNumberPerson, 
                    addressCepPerson, 
                    addressCityPerson, 
                    addressUFPerson, 
                    addressComplementPerson, 
                    user_login_cadastro
                }]

                let dadosGravados = localStorage.getItem('@SunglassClientes');

                if (dadosGravados != null){
                    let dadosGravadosAux = JSON.parse(dadosGravados);
                    
                    console.log(dadosGravadosAux);
                    console.log(JSON.parse(dadosGravados).lenght);

                    for (var i in dadosGravadosAux) {
                        data.push(dadosGravadosAux[i]);
                    }

                }

                let convertStringData = JSON.stringify(data);

                localStorage.setItem('@SunglassClientes', convertStringData);

                setMsgRetorno('Registro incluído com sucesso. Você será redirecionado para o DashBoard.');
                
                setTimeout(() => {
                    history.push('/dashboard');
                }, 1000)

            }else {
                setMsgRetorno('É necessário preencher pelo menos o Nome / CPF e Email');

                setTimeout(() => {
                    setMsgRetorno('')
                }, 3000)
            }
    }

    return (
        <>
            <Menu />

            <section className="section-container">

                <div className="section-content register-client-section">

                    <MenuLateral />

                    <article>

                        <p className="title-page">Cadastro de Clientes</p>

                        <div className="box-form"> 

                            <p className={msgRetorno ? 'msg-retorno-on' : 'msg-retorno-off'}>{msgRetorno}</p>

                            <form className="form-register" onSubmit={handleSubmit}>

                                <fieldset>
                                    <legend>Dados Principais:</legend>

                                    <div className="form-group form-group-big">
                                        <label htmlFor="nomePerson">Nome Completo:</label>
                                        <input 
                                            id="nomePerson"
                                            type="text"
                                            placeholder=""
                                            value={nomePerson}
                                            onChange={event => setNomePerson(event.target.value)}
                                        />
                                    </div>

                                    <div className="form-group form-group-small">
                                        <label htmlFor="cpfPerson">CPF:</label>
                                        <input 
                                            id="cpfPerson"
                                            type="text"
                                            placeholder=""
                                            value={cpfPerson}
                                            onChange={event => setCpfPerson(event.target.value)}
                                        />
                                    </div>

                                    <div className="form-group form-group-medium">
                                        <label htmlFor="emailPerson">Email:</label>
                                        <input 
                                            id="emailPerson"
                                            type="email"
                                            placeholder=""
                                            value={emailPerson}
                                            onChange={event => setEmailPerson(event.target.value)}
                                        />
                                    </div>

                                    <div className="form-group form-group-small">
                                        <label htmlFor="phonePerson">Telefone:</label>
                                        <input 
                                            id="phonePerson"
                                            type="text"
                                            placeholder=""
                                            value={phonePerson}
                                            onChange={event => setPhonePerson(event.target.value)}
                                        />
                                    </div>

                                    <div className="form-group form-group-small">
                                        <label htmlFor="mobilePerson">Celular:</label>
                                        <input 
                                            id="mobilePerson"
                                            type="text"
                                            placeholder=""
                                            value={mobilePerson}
                                            onChange={event => setMobilePerson(event.target.value)}
                                        />
                                    </div>

                                </fieldset>

                                <fieldset>
                                    <legend>Endereço Principais:</legend>

                                    <div className="form-group form-group-medium">
                                        <label htmlFor="addressPerson">Endereço:</label>
                                        <input 
                                            id="addressPerson"
                                            type="text"
                                            placeholder=""
                                            value={addressPerson}
                                            onChange={event => setAddressPerson(event.target.value)}
                                        />
                                    </div>

                                    <div className="form-group form-group-small">
                                        <label htmlFor="addressNumberPerson">Número:</label>
                                        <input 
                                            id="addressNumberPerson"
                                            type="text"
                                            placeholder=""
                                            value={addressNumberPerson}
                                            onChange={event => setAddressNumberPerson(event.target.value)}
                                        />
                                    </div>

                                    <div className="form-group form-group-small">
                                        <label htmlFor="addressCepPerson">Cep:</label>
                                        <input 
                                            id="addressCepPerson"
                                            type="text"
                                            placeholder=""
                                            value={addressCepPerson}
                                            onChange={event => setAddressCepPerson(event.target.value)}
                                        />
                                    </div>

                                    <div className="form-group form-group-small">
                                        <label htmlFor="addressCityPerson">Cidade:</label>
                                        <input 
                                            id="addressCityPerson"
                                            type="text"
                                            placeholder=""
                                            value={addressCityPerson}
                                            onChange={event => setAddressCityPerson(event.target.value)}
                                        />
                                    </div>

                                    <div className="form-group form-group-small">
                                        <label htmlFor="addressUFPerson">UF:</label>
                                        <input 
                                            id="addressUFPerson"
                                            type="text"
                                            placeholder=""
                                            value={addressUFPerson}
                                            onChange={event => setAddressUFPerson(event.target.value)}
                                        />
                                    </div>

                                    <div className="form-group form-group-medium">
                                        <label htmlFor="addressComplementPerson">Complemento:</label>
                                        <input 
                                            id="addressComplementPerson"
                                            type="text"
                                            placeholder=""
                                            value={addressComplementPerson}
                                            onChange={event => setAddressComplementPerson(event.target.value)}
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