import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MiRouter from './router/MiRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='rick-morty-wiki'>
      <MiRouter/>
    </BrowserRouter>
  </React.StrictMode>
);

