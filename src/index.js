import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Select from './select/select';

const root = ReactDOM.createRoot(document.getElementById('root'));

let perros = ["Gran danes","Galgo","Pitbull","Labrador"]
let gatos = ["Angora","Siames","Egipcio"]
root.render(
  <React.StrictMode>
    <Select items={perros} titulo="Perros">
    </Select>

    <Select items={gatos} titulo="gatos">
    </Select>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
