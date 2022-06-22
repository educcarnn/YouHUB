import styled from "styled-components";

export const LiCard = styled.li`
@media (min-width: 375px) {
  display: flex;
    width: 73%;
    gap: 20%;
    padding-right: 27%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    background-color: #121214;
    padding-left: 20%;
    margin-left: -25%;
    margin-bottom: 10%;
    body{
        background-color: gray;
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
`
