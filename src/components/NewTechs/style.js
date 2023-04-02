import styled from "styled-components";

export const AddStyle = styled.div`
  background: #212529;
  width: 30%;
  height: 10rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  top: 50;
  left: 50;
  display: flex;
  padding-bottom: 3rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  .textFirst {
    font-size: 65%;
  }
  .registerTech {
    margin-top: 7%;
    font-family: "Inter", sans-serif;
    background: #cd0031;
    border: none;
    color: white;
    padding-top: 2%;
    padding-bottom: 2%;
  }
  .cardInfo {
    display: flex;
    padding-top: 10%;
    text-align: initial;
    flex-direction: column;
    align-items: stretch;
  }
  .buttonClick {
    background-color: transparent;
    color: white;
    font-weight: 700;
    border: none;
  }
  .RegisterTech {
    background-color: #343b41;
    padding-bottom: 1%;
    width: 100%;
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

  .name {
    font-size: 75%;
    font-weight: 700;
  }
  @media(max-width: 800px){
    width: 50%;
  }
`;

export const FormNew = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  justify-content: center;
  gap: 5%;
`;
