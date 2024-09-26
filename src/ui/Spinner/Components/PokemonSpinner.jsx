import React from 'react';
import '../Style/PokemonSpinner.css'

export const PokemonSpinner = () => {
  return (
    <div className="spinner-container">
      <img 
        src="https://res.cloudinary.com/dl3etkgto/image/upload/v1727140974/a0vve6gqpahjmwl3x7q7.png" 
        alt="Cargando..." 
        className="pokemon-spinner"
      />
      Cargando Datos...
    </div>
  );
};

