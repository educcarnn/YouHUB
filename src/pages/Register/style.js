import styled from "styled-components";

export const FormRegister = styled.form`
  display: flex;
  background-color: #212529;
  flex-direction: column;
  width: 150%;
  margin-left: -35%;
  padding-left: 10%;
  padding-right: 8%;
  margin-top: 8%;
  padding-bottom: 7%;
  
  .header {
    background-color: #121214;
    width: 119%;
    padding-bottom: 2%;
    display: flex;
    margin-left: -13%;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
  .img {
    width: 35%;
    margin-left: 6%;
    padding-bottom: 3%;
  }
  .labels {
    font-size: 60%;
  }
  .labelSelect {
    font-size: 60%;
    margin-left: 10%;
  }
  .return {
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 4%;
    border-radius: 3px;
    background-color: #212529;
    color: white;
    border: none;
    padding-left: 1%;
    font-family: 'Inter', sans-serif;
  }
  .textFirst {
    font-size: 70%;
  }
  .textSecond {
    font-size: 75%;
    color: #868e96;
  }
  .styleInputs, .styleInputsSelect {
    width: 85%;
    border: none;
    background-color:  #343B41;
    border-radius: 2px;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 4%;
    margin-left: 10%;
    font-family: "inter",sans-serif;
    font-weight: 400;
  }
  .styleInputsSelect{
    width: 90%;
    color: #868E96;
    padding-left: 2%;
  }
  .error {
    font-size: 45%;
    color: red;
  }
  .msg {
    font-size: 50%;
    padding-top: 5%;
  }
  .button {
    margin-top: 5%;
  }
  .buttonSubmitRegister{
    max-width: 90%;
    margin-left: 5%;
    background: #59323F;
    border: none;
    color: white;
    border-radius: 2px;
    padding-top: 2%;
    padding-bottom: 2%;
  }
`;

export const LabelInfo = styled.div`
  @media(min-width: 320px){
    display: flex;
    flex-direction: row;
    gap: 10%;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10%;
    align-content: stretch;
    flex-wrap: nowrap;
  }
`