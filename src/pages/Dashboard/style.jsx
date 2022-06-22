import styled from "styled-components";
export const Header = styled.div`
  @media (min-width: 375px) {
    display: flex;
    justify-content: space-between;
    padding-top: 5%;
    flex-direction: row;
    border-bottom: 1px solid white;
    width: 130%;
    margin-left: -15%;
    padding-bottom: 10%;
  }
  @media (min-width: 768px) {
    margin-left: -40%;
    width: 154%;
    display: flex;
    padding-left: 25%;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-start;
    align-items: flex-start;
  }
  @media (min-width: 1024px) {
    margin-left: -70%;
    width: 215%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const DivFather = styled.div`
  @media (min-width: 375px) {
    .ulStyle {
      background-color: #212529;
      width: 100%;
      padding-left: 31%;
      margin-left: -15%;
      padding-top: 10%;
      padding-bottom: 1%;
    }
    .msg {
      color: red;
      margin-top: 10%;
    }
  }
`;

export const Message = styled.div`
  @media (min-width: 375px) {
    display: flex;
    text-align: justify;
    flex-direction: column;
    padding-top: 10%;
    border-bottom: 1px solid white;
    padding-bottom: 10%;
    margin-left: -14%;
    width: 128%;

    @media (min-width: 768px) {
      margin-left: -40%;
      gap: 20%;
      width: 154%;
      display: flex;
      padding-left: 25%;
      flex-wrap: wrap;
      flex-direction: row;
      align-content: flex-start;
      align-items: flex-start;
    }
    @media (min-width: 1024px) {
      margin-left: -70%;
      width: 215%;
      gap: 0%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;

export const AddTech = styled.div`
  @media (min-width: 375px) {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    padding-top: 5%;
    margin-left: -14%;
    width: 128%;
  }
`;
