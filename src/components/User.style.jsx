import styled from 'styled-components'

export const MainContent = styled.div`
    height: 70%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

`
export const UserInfo = styled.div`
    height: 60%;
    width: 50%;
    display: flex;
    justify-content: space-around;

    
`

export const UserImage = styled.div`
    & img{
        width: 200px;
        height: 200px;
    }
    
    
`

export const UserDetails = styled.div`
    
    color:white;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;
    margin-left: 10px;
    
`

export const UserName= styled.div`
    font-size: 20px;
    text-transform: uppercase;
    
`

export const UserDetail = styled.div`
    & div{
        display:flex;
        font-size: 20px;
        & p{
            padding-left: 10px;
        }
        & .green{
            color: #45EC1C;
        }
        & .red{
            color: #FF0F0F;
        }
    }
    
`

export const UserRepo= styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    height: 60%;
    & div{
        color: white;
        font-size: 20px;
    }
    
`

export const Repos = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    
`
