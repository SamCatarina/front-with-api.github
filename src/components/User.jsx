import React, { useEffect, useState } from 'react'
import { MainContent, Repos,UserDetail,UserDetails,UserImage,UserInfo,UserName,UserRepo } from './User.style'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Repo from './Repo'

function User() {

    const [userData, setUserData] = useState([])
    const [userRepos, setUserRepos] = useState([])
    const { user } = useParams();

    useEffect(() => {
        const fetchData = async () =>{
            const data = await axios.get(`https://api.github.com/users/${user}`)
            setUserData(data.data)
        };
        fetchData()
    }, [])

    const image = userData.avatar_url

    useEffect(() => {
        const fetchData = async () => {
          const { data } = await axios.get(`https://api.github.com/users/${user}/repos`)
          setUserRepos(data);
          return userRepos
        };
        fetchData();
      }, [])




  return (
    <MainContent>
        <UserInfo>
            <UserImage>
                <img src={image} alt="avatar" />
            </UserImage>
            <UserDetails>
                <UserName>
                    {userData.login}
                </UserName>
                <UserDetail>
                    <div>code-number: <p className='green'> {userData.id}</p></div>
                    <div>Human: <p className='green'> True</p></div>
                    <div>Malwares: <p className='red'> {userData.public_repos}</p></div>
                    <div>Victims: <p className='red'> {userData.followers}</p></div>
                </UserDetail>
            </UserDetails>
        </UserInfo>

        <UserRepo>
            <div>Malwares coded by this individual: <br></br><small>please, be careful</small></div>
            <Repos>
                {userRepos.map((note, key) => {
                    if(key<=2){
                        return <Repo nome={note.name} description={note.description}/>
                    }
                              
                })}
                
            </Repos>
            
        </UserRepo>
    </MainContent>
  )
}

export default User