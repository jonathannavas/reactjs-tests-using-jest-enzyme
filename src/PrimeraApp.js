import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo, subtitulo } ) => {

    return (
        <>
            <h5>{ saludo }</h5>
            <p>{ subtitulo }</p>
        </>
    );
     
}   

/* Definir propiedades para los tipos de datos de las variables */
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
// Valores de las propiedades por defecto
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
