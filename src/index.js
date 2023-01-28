import React from 'react';
import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Lawyer from './store/lawyer';
import Store from './store/store';

const store = new Store();
const lawyer = new Lawyer();

export const Context = createContext({
    store,
    lawyer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Context.Provider value={{store, lawyer}}>
            <App /> 
        </Context.Provider>
    </BrowserRouter>
);