import styled from "styled-components";

export const FormStyle = styled.form`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-between;
    justify-content: center;
    margin-top: 20%;
    background-color: #212529;
    margin-top: 89%;
    width: 165%;
    margin-left: -32%;
    border-radius: 4px;
    padding-top: 23%;
    padding-bottom: 10%;
    .text {
      text-align: center;
      font-size: 100%;
    }
    .styleLabels, .labelFirst {
      font-size: 60%;
    }
    .labelFirst{
      margin-left: -6%;
    }
    .styleInputs, .secondInput {
      border: 2px solid gray;
      border-radius: 2px;
      padding-top: 3%;
      padding-bottom: 3%;
      margin-left: -7%;
      width: 108%;
      padding-left: 3%;
      font-family: "inter", sans-serif;
      font-weight: 400;
    }
    .buttonSubmit {
      border-radius: 2px;
      width: 60%;
      padding-top: 2%;
      padding-bottom: 2%;
      color: white;
      background: #cd0031;
      border: none;
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
    .img{
      margin-top: -25%;
    }
    .button {
      margin-top: 5%;
      border-radius: 2px;
      width: 60%;
      padding-top: 2%;
      padding-bottom: 2%;
      color: white;
      background: #868E96;
      border: none;
    }
  }
`;
export const LabelLogin = styled.div`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    text-align: justify;
    margin-bottom: 5%;
    max-width: 100%;
  }
  .SecondInputStyle{
    display: flex;
  }
  .buttonShow{
    border: none;
    background-color: transparent;
  }
  .secondInput{
    margin-left: 0%;
    padding-bottom: 3%;
    margin-right: -12%;
  }

`

export const Labels = styled.div`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    text-align: justify;
    margin-bottom: 5%;
    margin-left: -5%;
    max-width: 100%;
  }
`;
