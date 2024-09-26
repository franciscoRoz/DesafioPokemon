import React, { useState } from 'react'
import { Addmilist, Removemilist, SetDetails } from '../../store/Slices/Pokemon/PokemonSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const ImagePokemonCard = ({pokemon}) => {
    const [liked, setLiked] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toggleLike = (e) => {
        e.stopPropagation()
        if(!liked){
            dispatch(Addmilist({pokemon}))
            return setLiked(!liked) 
        }
        dispatch(Removemilist({pokemon}))
        return setLiked(!liked)
    };

    return (
        <div className='block-pokemon-card' style={{backgroundColor:pokemon?.background }}>
            <img className='modifier-sprite-card' src={pokemon?.image} alt="" width={'350px'} />
            
            <div className={`element-heart-back`}>
                <div className='element-back' onClick={()=>navigate('/Home')}><img src="https://res.cloudinary.com/dl3etkgto/image/upload/v1727223718/qmwduqzhobq5k38mcflb.png" alt="back-Arrow" width={'30px'} style={{filter: 'invert(100%)'}}/>Volver</div>
                <button className={`modifier-heart-button ${liked ? 'active' : ''}`} onClick={(e)=>{toggleLike(e)}}>
                    <div className="heart"></div>
                </button>
            </div>
            <img className={`element-icon-pokeball-bg`} src="https://res.cloudinary.com/dl3etkgto/image/upload/v1727140974/a0vve6gqpahjmwl3x7q7.png" alt="icon-pokeball" />
            </div>
  )
}
