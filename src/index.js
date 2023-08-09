import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import App from './Pages/home';
import Tarefas from './Pages/tarefas';
import Contato from './Pages/contato';
import Media from './Pages/media';
import AulaComp from './Pages/aula-comp';
import Correio from './Pages/correio';
import Aluno from './Pages/aluno';
import Sorvete from './Pages/sorvetinho';
import Juros from './Pages/juros';
import Insta from './Pages/instagran';
import Filme from './Pages/filme';

import {BrowserRouter,Routes,Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path ='/' element={<Insta />} />
      <Route path ='/filme' element={<Filme />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


