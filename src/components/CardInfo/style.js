import styled from "styled-components";

export const LiCard = styled.li`
@media (min-width: 375px) {
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
}
@media(min-width: 768px){
    gap: 10%;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}
@media(min-width: 1024px){
    margin-left: -90%;
    padding-left: 52%;
    gap: 20%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 5%;
}
`
