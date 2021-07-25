import React, {useState} from 'react';
import Footer from '../../components/Footer';

export default function Login({ history }){

    const [loginName, setLoginName] = useState('');
    const [password, setPassword] = useState('');
    const [messageError, setMessageError] = useState('');
 
    async function handleSubmit(event){
        event.preventDefault();


        if ((loginName === 'hiring') && (password === 'coders')){

            localStorage.setItem('user', loginName);
            history.push('/dashboard');
        
        }
        else{
            
            setMessageError('Login e/ou Senha Incorretos. Reavalie os dados inseridos.');
        }          
    }

    return (
        <>
            <div className="container-login">

                <div className="logo-sun">
                    <span className="part-one">Sun</span>
                    <span className="part-two">Glass</span >
                </div>

                <div className="content-login">

                    <p>
                        <span>Área gerencial</span><br /> 
                        Projeto Desafio #2 HiringCoders. <br />
                        Para efetuar o login utilize as credenciais:<br/> 
                        Login: "hiring" / Senha: "coders"
                    </p>

                    <form className="form-login" onSubmit={handleSubmit}>
                    
                        <label htmlFor="loginName">Login *</label>
                        <input 
                            type="text"
                            placeholder="Login"
                            value={loginName}
                            onChange={event => setLoginName(event.target.value)}
                        />

                        <label htmlFor="password">Senha *</label>
                        <input 
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />

                        <button className="btn" type="submit">Entrar</button>

                        <span>{messageError !== '' ? messageError : ''}</span>
                    </form>
                </div>

                
            </div>
            <Footer />
        </>
    );
}