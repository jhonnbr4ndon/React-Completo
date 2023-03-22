import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import apiCEP from "../../services/apiCEP";
import {AreaCEP} from '../../components/main'


function Cep(){

    const [cepDigitado,setCepDigitado] = useState('');
    const [valoresCep, setValoresCep] = useState('');

    async function pesquisarCep(){
    //alert ('valor input');

    const response = await apiCEP(`${cepDigitado}/json`);

    console.log(response);
    setValoresCep(response.data);
}
    
    return(
        <div>
        <AreaCEP>
        <h1>PESQUISAR CEP</h1>
        <h3> AQUI VAI MEU FORMS DE PESQUISA CEP</h3>
        DIGITE SEU CEP: <input  type="text" placeholder="digite um cep" value={cepDigitado} onChange={(event) => setCepDigitado(event.target.value)}/>
        <button onClick={pesquisarCep}>
          <FiSearch size={12}/>
        </button> <br/>
        
        <p>
          Bairro: {valoresCep.bairro} <br/>
          cep: {valoresCep.cep} <br/>
          complemento: {valoresCep.complemento} <br/>
          ddd: {valoresCep.ddd} <br/>
          gia: {valoresCep.gia} <br/>
          ibge: {valoresCep.ibge} <br/>
          localidade: {valoresCep.localidade} <br/>
          logradouro: {valoresCep.logradouro} <br/>
          siafi: {valoresCep.siafi} <br/>
          uf: {valoresCep.uf} <br/>
        </p>
        </AreaCEP>
        </div>
    );

}

export default Cep;