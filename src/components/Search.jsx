import React, { useEffect } from 'react'
import { MainContent, SearchElements } from './Search.style'
import { useNavigate, Link } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import axios from 'axios'

function Search() {

  const {register, handleSubmit} = useForm();

  const navigate = useNavigate()

  const onSubmit = data => {

    navigate(`/user/${data.user}`)
  }

  return (
    <MainContent>
        <SearchElements>
            <h1>Please, let us know who you are looking for:</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder='user' {...register("user")} />
              <button type='submit'>search</button>
            </form>
        </SearchElements>
        <small>* All information present in this database is confidential. So if you are not part of high government positions, please close the program...</small>
        
    </MainContent>
  )
}

export default Search