import React from 'react';
// import { useHistory } from 'react-router-dom';


export default function Acervo () {
    // const history = useHistory();
    const usuarioId = localStorage.getItem('usuarioId');
    const usuarioName = localStorage.getItem('usuarioName');


    return(
      <div>
        <h1>Hello World</h1>
        <h1>{usuarioName}</h1>
        <h1>{usuarioId}</h1>
      </div>
    );
} 