import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root')); // This renders or creates the App function into the element of root ID.

