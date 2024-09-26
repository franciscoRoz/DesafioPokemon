import React from 'react'
import { GetPokemons } from '../../store/Slices/Pokemon/Thunks'
import { useDispatch } from 'react-redux'
import { Page } from '../Section/Pagination/page'
import '../Style/Pagination.css'

export const Pagination = ({ page }) => {

  const dispatch = useDispatch()

  return (
    <div className='element-pagination'>

      <button onClick={() => page > 0 && dispatch(GetPokemons(page - 1))} >{'<'}</button>
    
      <Page page={page + 1} currentPage={page+1}/>
      <Page page={page + 2} currentPage={page}/>
      <Page page={page + 3} currentPage={page}/>
      <Page page={page + 4} currentPage={page}/>
      <Page page={page + 5} currentPage={page}/>
      <Page page={page + 6} currentPage={page}/>
      <Page page={page + 7} currentPage={page}/>
      <Page page={page + 8} currentPage={page}/>
      <Page page={page + 9} currentPage={page}/>
    
      <button onClick={() => page >= 66 &&dispatch(GetPokemons(page + 1))} >{'>'}</button>

    </div>
  )
}
