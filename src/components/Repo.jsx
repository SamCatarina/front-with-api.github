import React from 'react'
import { RepoOnly } from './Repo.style'

function Repo(props) {
  return (
    <RepoOnly>
        <h3>{props.nome}</h3>
        <p>{props.description}</p>
    </RepoOnly>
  )
}

export default Repo