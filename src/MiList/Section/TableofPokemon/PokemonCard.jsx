import React, { useEffect, useState } from 'react'
import '../../Style/PokemonCard.css'
import { CapitalizeFirstLetter } from '../../../Util/CapitalizerFirstLetter';
import { FillNumber } from '../../../Util/FillNumber';
import { useDispatch, useSelector } from 'react-redux';
import { Addmilist, Removemilist, SetDetails } from '../../../store/Slices/Pokemon/PokemonSlice';
import { useNavigate } from 'react-router-dom';
import { traslatetype } from '../../../Util/TraslateType';
import { traslatecolor } from '../../../Util/TranslateColor';





export const PokemonCard = ({ pokemon }) => {
    const { milist } = useSelector(state => state.Pokemon);
    const [liked, setLiked] = useState(true);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
      
        setLiked(milist?.some((item)=>item.name===pokemon?.name))
    
    
}, [pokemon,milist])
    const toggleLike = (e) => {
        e.stopPropagation()
        if (!liked) {
            dispatch(Addmilist({ pokemon })); 
        } else {
            dispatch(Removemilist({ pokemon })); 
        }
        setLiked(!liked);
    };

    const handledetail=()=>{
        dispatch(SetDetails({pokemon}))
        navigate('/Pokedex/detail');
    }
    return (
        <div className='block-card' onClick={()=>handledetail()}>
            <img className='modifier-sprite' src={pokemon?.image} alt="" width={'200px'} />
            <div className={`element-header-card`} style={{ backgroundColor: pokemon?.background }}>
                <img className={`element-icon-pokeball`} src="https://res.cloudinary.com/dl3etkgto/image/upload/v1727140974/a0vve6gqpahjmwl3x7q7.png" alt="icon-pokeball" width={'40px'} />
                <button className={`modifier-heart-button ${liked ? 'active' : ''}`} onClick={(e)=>{toggleLike(e)}}>
                    <div className="heart"></div>
                </button>
            </div>
            <div className='element-desription'>
                <div className='element-name-id'>
                    <h3>{CapitalizeFirstLetter(pokemon?.name)}</h3>
                    <span>{`#${FillNumber(pokemon?.id, 5)}`}</span>
                </div>
               
                <div className='element-types'>
                <span style={{color:'black'}}>Tipo</span>
                <br />
                    {pokemon.types.map(({ type }, index) => (
                        <div className='modifier-type' style={{ backgroundColor: `${traslatecolor(type.name)}` }} key={index}>

                            <span >{traslatetype(type.name)}</span>
                        </div>


                    ))}
                </div>
            </div>
        </div>
    )
}
