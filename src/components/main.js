import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    corFundo: 'beige',
    corTexto: 'green',
    tituloH1: 'green'
}

export const darkTheme = {
    corFundo: 'aliceblue',
    corTexto: 'darkblue',
    tituloH1: 'darkblue'
}

export const GlobalStyles = createGlobalStyle `
    body {
        background-color: ${props => props.theme.corFundo};
    }
`

export const ContainerPage = styled.div `
        padding: 5px 100px;
        color: ${props => props.theme.corTexto};
    `
export const TittlePage = styled.h1 `
        color: ${props => props.theme.corTexto};
        font-size: 20px;
    `
export const AreaCEP = styled.div  `
    background-color: bisque;
    padding: 30px;
    p{
        color: darkgreen;
    }
`

export const AreaHeader = styled.div `
    height: 60px;
    background-color: #392a35;
    color: white;

    a {text-decoration: none; color: grey;}
    a:visited {text-decoration: none;}
    a:hover {text-decoration: none;}
    a:focus {text-decoration: none;}
    a:hover, a:active {text-decoration: none;}
    
    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }
        .logo{
            flex: 1;
            height: 30px;
        }
        nav{
            ul{
                display: flex;
            }
                li{
                    list-style: none;
                    margin-left: 20px;
                }
        }
`
