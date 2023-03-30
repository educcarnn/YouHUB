import styled from "styled-components";
export const Header = styled.div`
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    padding-top: 5%;
    flex-direction: row;
    width: 130%;
    margin-left: -15%;
    gap: 39%;
    padding-bottom: 10%;
    justify-content: space-around;

    .buttonReturn {
      background: #212529;
      border: none;
      padding-bottom: 1%;
      padding-top: 1%;
      border-radius: 5%;
      color: white;
    }
  }
  @media (max-width: 768px) {
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
    gap: 65%;
    margin-left: -65%;
    padding-left: 13%;
    padding-right: 10%;
    width: 215%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const DivFather = styled.div`
  @media (max-width: 800px) {
    .ulStyle {
      background-color: #212529;
      padding-left: 100%;
      margin-left: -45%;
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
  @media (min-width: 1024px){
    .ulStyle{
      padding-top: 6%;
      border-radius: 5px;
      padding-left: 100%;
      margin-left: -45%;
    }
  }
`;

export const InLine = styled.span`
  margin-top: 50px;
  width: 600%;
  position: absolute;
  border-bottom: 1px solid #212529;
`
 
export const Message = styled.div`
  @media (min-width: 375px) {
    margin-top: 0rem;
    display: flex;
    text-align: justify;
    align-items: center;
    flex-direction: column;
    padding-top: 10%;
    justify-content: space-around;
    padding-bottom: 10%;
    margin-left: -55%;
    width: 128%;
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
    @media (min-width: 768px) {
      margin-left: -40%;
      gap: 56%;
      width: 154%;
      display: flex;
      justify-content: space-around;
      padding-left: 25%;
      flex-wrap: wrap;
      flex-direction: row;
      align-content: flex-start;
      align-items: flex-start;
    }
    @media (min-width: 1024px) {
      margin-top: -10%;
      margin-left: -78%;
      width: 215%;
      gap: 68%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: baseline;
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
    
    .techs {
      font-weight: 700;
    }

    .buttonStyle {
      background-color: transparent;
      border: none;
    }

    .buttonClick {
      background-color: transparent;
      color: white;
      border: none;
    }
  }
  @media (min-width: 768px){
    gap: 68%;
    display: flex;

    margin-left: 0%;
    flex-direction: row;
    justify-content: space-around;
  }
  
  @media (min-width: 1024px){
    gap: 120%;
    margin-left: -7%;
    padding-top: 0%;
}
`;
