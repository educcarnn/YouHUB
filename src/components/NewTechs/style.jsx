import styled from "styled-components";

export const AddStyle = styled.div`
  background-color: black;
  width: 100%;
  height: 25%;
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
    height: 100%;
    border-bottom: 1px solid white;
    display: flex;
    padding-bottom: 1%;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: space-between;
    justify-content: space-around;
  }
`;

export const FormNew = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  justify-content: center;
  gap: 5%;
`;
