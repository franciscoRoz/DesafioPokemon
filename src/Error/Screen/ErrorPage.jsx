import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/ErrorPage.css'

export const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/Pokedex');
    };

    return (
        <div className="error-container">
            <div className="error-content">
                <h1>¡Oops! Algo salió mal.</h1>
                <p>Lo sentimos, ha ocurrido un error inesperado. Por favor, intenta nuevamente más tarde.</p>
                <img
                    src="https://res.cloudinary.com/dl3etkgto/image/upload/v1727300832/hjti7tatvknrktry5uak.jpg"
                    alt="Error Illustration"
                    className="error-image"
                />
                <br />
                <button className="back-button" onClick={handleGoBack}>
                    Volver a la pokedex
                </button>
            </div>
        </div>
    );
};