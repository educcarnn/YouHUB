import styled from "styled-components";

export const LiCard = styled.li`

  display: flex;
    width: 73%;
    gap: 10%;
    padding-right: 27%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    background-color: #121214;
    padding-left: 20%;
    margin-left: -25%;
    border-radius: 5px;
    margin-bottom: 10%;
    :hover{
        background-color: #343B41;
    }
    body{
        background-color: gray;
    }
    .buttonRemove{
        background-color: transparent;
        border: none;
    }
    .titleText{
        font-weight: 700;
    }
    .spanName{
        font-weight: 400;
        font-size: 70%;
    }


`
