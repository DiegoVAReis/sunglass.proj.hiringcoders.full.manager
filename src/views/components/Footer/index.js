import React from 'react';

export default function Footer(){    
    return (
        <footer>

            <div className="section-content">

                <div id="footer-about" className="text-footer">
                    <p className="footer-title">Sobre.</p>
                    <p className="footer-desc">Site desenvolvido para o Hiring Coders da Gama Academy. <br /></p>
                </div>

                <div id="footer-conect" className="text-footer">
                    <ul>
                        <li><a href="https://br.linkedin.com/in/diego-reis-86211691" target="_blank" rel="noreferrer">Linkedin | <span
                                    id="logo-linkedin"></span></a></li>
                        <li><a href="https://github.com/DiegoVAReis" target="_blank" rel="noreferrer">GitHub | <span
                                    id="logo-github"></span></a></li>
                    </ul>
                </div>

            </div>

            <div id="footer-copyright">
                <p>Todos os direitos reservados. Desenvolvido por <a href="https://github.com/DiegoVAReis"
                    target="_blank" rel="noreferrer">Diego Reis</a></p>
            </div>
        </footer>
    )
}









