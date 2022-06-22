import styled from "styled-components";

export const AddStyle = styled.div`
@media (min-width: 375px) {
  background-color: black;
  width: 44vh;
  height: 25%;
  position: fixed;
  display: flex; 
  padding-bottom: 5%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  .cardInfo {
    display: flex;
    text-align: initial;
    flex-direction: column;
    align-items: stretch;
  }
  .buttonClick{
    background-color: transparent;
    color: white;
    border: none;
  }
  .RegisterTech{
    background-color: #343B41;
    padding-bottom: 1%;
    width: 130%;
    height: 20%;
    border-bottom: 1px solid white;
    display: flex;
    padding-bottom: 1%;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: space-between;
    justify-content: space-around;
  }
}
@media (min-width: 768px) {
    width: 65vh;
    margin-top: -10%;
}
`

export const FormNew = styled.form`
@media (min-width: 375px) {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  justify-content: center;
  gap: 5%;
}
`;
