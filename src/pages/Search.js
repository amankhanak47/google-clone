import React, { useState } from 'react'
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import "./search.css"
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionType } from '../reducer';

const Search = ({hideButtons=false,val}) => {
  const [{},dispatch]=useStateValue();

  const [input,setInput]=useState("")
  const history=useNavigate()


  const search=(e)=>{
    e.preventDefault()
    history("/search")
    console.log("entered",input)
    dispatch({
      type: actionType.SET_SEARCH_TERM,
      term:input
    })
  }
  return (
    <form className='search'>
      
    
         <div className="search-input">
         <SearchIcon className='inp-icon'/>
         <input value={input} onChange={e=>setInput(e.target.value)}/>
         <MicIcon/>
       </div>
      {!hideButtons?(
        <>
      <div className="search-btns">
        <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
        <Button variant='outlined'>I'm Feeling Lucky</Button>
      </div>
      </>
      ):(
        <>
        
      
        <div className="search-btns hidebtns">
        <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
        <Button variant='outlined'>I'm Feeling Lucky</Button>
      </div>
      </>
      )}

    </form>
  )
}

export default Search
