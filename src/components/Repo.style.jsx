import styled from 'styled-components'

export const RepoOnly = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    border: 1px solid white;
    width: 20%;
    height: 100px;
    padding: 10px;

    & h3{
        text-align: center;
        font-size: 14px;
        color: #FF0F0F;
    }
    & p{
        font-size: 14px;
        margin-top: 10px;
    }

    @media screen and (max-width:950px) {
        width: 35%;
        
    }

`