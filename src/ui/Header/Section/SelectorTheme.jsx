import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../../store/Slices/Theme';

import '../Style/Selector.css'

export const SelectorTheme = () => {
 
    const dispatch = useDispatch();
  return (
    <div  className="element-button r" id="selector">
      <input type="checkbox" className="checkbox" onClick={()=>dispatch(changeTheme())}/>
      <div className="element-knobs"></div>
      <div className="element-layer"></div>
    </div>
  )
}
