import Header from './components/header';
import Footer from './components/footer';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import {lightTheme, darkTheme, GlobalStyles} from './components/main';
import {ThemeProvider} from 'styled-components';
import {useState} from 'react';

function App() {
  const [tema,setTema] = useState('light');
  const temaAlternar = () => {
    tema === 'light' ? setTema ('dark') : setTema('light');
  }

  return (
    <BrowserRouter>
      <Header/>
        <button onClick={()=> temaAlternar()}>Trocar Tema</button>
          <ThemeProvider theme={ tema==='dark' ? lightTheme:darkTheme }>
            <GlobalStyles/>
              <Routes></Routes>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
