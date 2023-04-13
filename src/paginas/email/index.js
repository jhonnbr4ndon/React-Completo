import React from "react";
import {ContainerPage, TittlePage} from '../../components/main'
import { useState } from "react";

export default function Email(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail (){

        if(name === '' || email === '' || message === ''){
            alert('Preencha os campos do form');
            return;
        }
        
    }
    
    return(
        <>
        <ContainerPage>
        <TittlePage>
            Pagina para envio de e-mail
        </TittlePage>
        <form className="form" onSubmit={sendEmail}>
            <input className="input" type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} value={name}/>
            <input className="input" type="text" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <textarea className="textarea" placeholder="Digite sua mensagem..." onChange={(e) => setMessage(e.target.value)} value={message}/>
            <input className="button" type="submit" value="Enviar"/>
        </form>  
        </ContainerPage>
        </>
    );

}
