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
/*
background - Define o plano de fundo de um elemento, permitindo definir cor, imagem, repetição e posicionamento.
border - Define as bordas de um elemento, permitindo definir largura, estilo e cor da borda.
color - Define a cor do texto dentro de um elemento.
display - Define como um elemento deve ser exibido na página, podendo ser block, inline, inline-block, entre outros.
font - Define a fonte do texto dentro de um elemento, permitindo definir tamanho, estilo e peso da fonte.
margin - Define a margem ao redor de um elemento, que é o espaço entre o elemento e seus vizinhos.
padding - Define o espaço de preenchimento ao redor do conteúdo de um elemento, dentro de sua borda.
text-align - Define o alinhamento horizontal do texto dentro de um elemento, podendo ser left, right, center, justify, entre outros.
text-decoration - Define a decoração do texto dentro de um elemento, permitindo adicionar sublinhado, tachado, entre outros.
text-transform - Define como o texto dentro de um elemento deve ser transformado, permitindo mudar para maiúsculas, minúsculas, entre outros.
text-shadow - Adiciona uma sombra ao texto dentro de um elemento.
box-shadow - Adiciona uma sombra ao elemento em si, não apenas ao texto dentro dele.
width - Define a largura do elemento.
height - Define a altura do elemento.
float - Define como um elemento deve ser posicionado em relação aos seus vizinhos, permitindo criar layouts de várias colunas.
position - Define o tipo de posicionamento do elemento na página, permitindo definir como ele deve se comportar em relação ao seu contêiner e aos elementos irmãos.
top - Define a distância entre a parte superior do elemento e o topo do contêiner que o envolve.
right - Define a distância entre a borda direita do elemento e a borda direita do contêiner que o envolve.
bottom - Define a distância entre a borda inferior do elemento e a borda inferior do contêiner que o envolve.
left - Define a distância entre a borda esquerda do elemento e a borda esquerda do contêiner que o envolve.
z-index - Define a ordem de empilhamento dos elementos na página, permitindo que elementos sobrepostos apareçam corretamente.
opacity - Define a transparência de um elemento, permitindo que o conteúdo subjacente seja visto através dele.
transition - Adiciona uma transição suave entre os valores de uma propriedade CSS quando ela é alterada.
transform - Aplica uma transformação ao elemento, permitindo rotacioná-lo, escalá-lo, entre outras transformações.
overflow - Define como o conteúdo deve ser exibido quando não couber no elemento.
list-style - Define a aparência de uma lista, permitindo adicionar marcadores e definir o estilo deles.
cursor - Define o tipo de cursor que é exibido quando o mouse passa sobre o elemento.
box-sizing - Define como a largura e a altura de um elemento são calculadas, levando em conta ou não as bordas e o preenchimento.
background-image - Define uma imagem de fundo para o elemento.
outline - Define uma linha de contorno ao redor do elemento, permitindo adicionar estilo e cor à borda.
flex - Define como um elemento deve se comportar dentro de um layout flexível, permitindo definir o tamanho, a ordem e o alinhamento dos itens.
grid - Define um layout em grade, permitindo criar uma estrutura de linhas e colunas que pode ser preenchida com elementos.
justify-content - Define como os itens de uma linha ou coluna devem ser distribuídos ao longo do eixo principal do layout.
align-items - Define como os itens de uma linha ou coluna devem ser alinhados ao longo do eixo transversal do layout.
align-self - Define como um item específico deve se alinhar em relação aos outros itens em seu contêiner.
order - Define a ordem de um item em um layout flexível ou em grade.
flex-direction - Define a direção do fluxo dos itens em um layout flexível, permitindo alterar a ordem das linhas e colunas.
gap - Define o espaço entre os itens em um layout em grade.
transition - Adiciona uma transição suave entre os valores de uma propriedade CSS quando ela é alterada.
animation - Adiciona uma animação a um elemento, permitindo criar efeitos visuais avançados.
visibility - Define se um elemento deve ser exibido ou oculto na página.
pointer-events - Define como um elemento responde aos eventos do mouse, permitindo que o clique ou o movimento do mouse passem através dele ou sejam bloqueados por ele.
user-select - Define se o texto dentro de um elemento pode ser selecionado pelo usuário.
text-overflow - Define como o texto deve ser exibido quando ele ultrapassa os limites de seu contêiner.
white-space - Define como o espaço em branco dentro de um elemento deve ser tratado, permitindo que o texto seja quebrado ou não em várias linhas.
word-wrap - Define como as palavras devem ser quebradas quando não couberem em uma única linha.
border-radius - Define o raio das bordas de um elemento, permitindo criar cantos arredondados.
box-decoration-break - Define como os efeitos de decoração de uma borda são tratados quando a borda é quebrada em várias linhas.
text-indent - Define o recuo da primeira linha de texto dentro de um elemento.
*/