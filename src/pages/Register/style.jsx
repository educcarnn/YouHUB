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
  .styleInputs {
    border: 2px solid gray;
    border-radius: 2px;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 4%;

    font-family: "inter",sans-serif;
    font-weight: 400;
  }
  .error {
    max-width: 100%;
    font-size: 75%;
    margin-top: 2%;
    margin-bottom: 2%;
    color: red;
  }
  .msg {
    font-size: 50%;
    padding-top: 5%;
  }
  .button {
    margin-top: 5%;
  }
`;
