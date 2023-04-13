import React from 'react';
import {AreaHeader} from '../main';
import {Link} from 'react-router-dom';
import imgLogo from "../../imagens/logo192.png"


function Header() {
  return (
    <div>
      <AreaHeader>
      <div className='container'>
          <div className='logo'>
            

        <img src={imgLogo} alt="imagem" className='logo'/>
            
          </div>
          
        <nav>
          <ul>
            <li> <Link to='/'> INDEX</Link></li>
            <li> <Link to='/sobre'> SOBRE</Link></li>
            <li> <Link to='/cep'> CEP</Link></li>
            <li> <Link to='/email'> E-MAIL</Link></li>
          </ul>
        </nav>
      </div>
     
      </AreaHeader>
    </div>
  )
};
export default Header;