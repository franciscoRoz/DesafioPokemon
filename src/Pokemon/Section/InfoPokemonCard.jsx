import React from 'react'
import { CapitalizeFirstLetter } from '../../Util/CapitalizerFirstLetter'


export const InfoPokemonCard = ({ details }) => {
    return (
        <div className='block-info-card'>
            <strong style={{color :details.background}}>Acerca de</strong>
            <br />
            <div className='element-container-info'>

                <div className='element-height'>
                    <div className='element-info-height'>
                        <img src="https://res.cloudinary.com/dl3etkgto/image/upload/v1727219252/u0blcnxzqslgv7fmbl3t.png" alt="ruler" width={'20px'} style={{ transform: 'rotate(-45deg)' }} /> <span>{`${details.height} m`} </span>
                    </div>
                    <span>Altura</span>
                </div>

                <div className='element-weight'>
                    <div className='element-info-weight'>
                        <img src="https://res.cloudinary.com/dl3etkgto/image/upload/v1727219735/j808zgwpmxthr13jmwq0.png" alt="weight" width={'20px'} /> <span>{`${details.weight} kg`} </span>
                    </div>
                    <span>Peso</span>
                </div>
                <div className='element-abilities'>
                    <div className='element-info-abilities'>
                        {details.abilities.map((item, index) => (

                            <span key={index}>{CapitalizeFirstLetter(item)}</span>
                        ))}
                    </div>
                    <span>Habilidades</span>
                </div>


            </div>
        </div>
    )
}
