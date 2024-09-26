import React from 'react'
import { useDispatch } from 'react-redux';
import { SetPage } from '../../../store/Slices/Pokemon';


export const Page = ({page,currentPage }) => {
    const dispatch = useDispatch()
    
  return (
    <><button 
    disabled={page>=66}
    style={{
        fontWeight: currentPage === page ? 'bold' : 'normal',
        color: currentPage === page ? '#FFFFFF' : '#000000',
        backgroundColor: currentPage === page ? '#514679' : 'transparent',
      
      }}
    onClick={() => dispatch(SetPage({page}))}>{page}</button></>
  )
}
