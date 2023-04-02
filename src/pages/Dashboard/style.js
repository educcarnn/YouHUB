import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5%;
  padding-bottom: 10%;
  margin-left: -15%;
  width: 130%;
  gap: 39%;

  .buttonReturn {
    background: #212529;
    border: none;
    padding-top: 1%;
    padding-bottom: 1%;
    border-radius: 5%;
    color: white;
  }

  @media (max-width: 800px) {
    margin-left: -40%;
    width: 100%;
    display: flex;
    padding-left: 25%;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-start;
  }
`;

export const DivFather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .addTech{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .msg {
    color: red;
    margin-top: 10%;
  }


    .ulStyle {
      background-color: #212529;
      padding-left: 31%;
      margin-left: -15%;
      width: 100%;
      padding-top: 10%;
      padding-bottom: 1%;
      border-radius: 5px;
    }
  
`;

export const Message = styled.div`
  margin-top: 0;
  margin-left: -55%;
  width: 128%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 10%;
  padding-bottom: 10%;

  .firstText {
    font-weight: 700;
  }

  .secondText {
    margin-left: -3.4rem;
    font-weight: 600;
    color: #868e96;
    margin-top: 2%;
    font-size: 70%;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-left: -40%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-left: 25%;
    flex-wrap: wrap;
  
    align-content: flex-start;

  }
`;

export const AddTech = styled.div`
  .buttonClick {
    background-color: transparent;
    color: white;
    border: none;
  }

  .buttonStyle {
    background-color: transparent;
    border: none;
  }
  .techs {
    font-weight: 700;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-left: -14%;
    width: 128%;
  }
`;
