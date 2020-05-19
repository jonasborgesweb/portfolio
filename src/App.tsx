import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Routes from './routes'

import GlobalStyle from './styles/global'

import Header from './components/Header'
import Footer from './components/Footer'

const App:React.FC = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Footer />
      <GlobalStyle/>
    </>
  );
}

export default App;
