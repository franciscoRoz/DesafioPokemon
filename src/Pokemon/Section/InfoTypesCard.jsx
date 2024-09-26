import React from 'react'
import { traslatetype } from '../../Util/TraslateType'
import { traslatecolor } from '../../Util/TranslateColor'

export const InfoTypesCard = ({ details }) => {
    return (
        <div className='block-info-card'>

            <div className='element-info-types'>
                {details.types.map(({ type }, index) => (
                    <div className='modifier-type' style={{ backgroundColor: `${traslatecolor(type.name)}` }} key={index}>
                        <span >{traslatetype(type.name)}</span>
                    </div>
                ))}
            </div>
            
        </div>
    )
}
