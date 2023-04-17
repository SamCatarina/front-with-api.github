import styled from 'styled-components'

export const MainContent = styled.div`
    height: 50%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    & small{
        font-size: 10px;
        color: white;
    }

`

export const SearchElements = styled.div`
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    & h1{
        color:white;
        font-size: 24px;
    }
    & form{
        width:100%;
        height: 60%;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        & input{
            width:50%;
            height: 50px;
            padding: 15px 30px;
            font-size: 18px;
            background-color: #413F48;
            color: white;
        }
        & input:active{
            background-color: none;
            border: none;
        }

        & button{
            border:none;
            width: 20%;
            height: 30px;
            background-color: #959595;
            color: white;
        }
    }




    
`