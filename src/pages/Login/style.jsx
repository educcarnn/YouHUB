import styled from "styled-components";

export const FormStyle = styled.form`
  @media (min-width: 375px) {
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
    padding-bottom: 10%;
    .text{
        text-align: center;
        font-size: 100%;
    }
    .error {
      max-width: 100%;
      font-size: 75%;
      margin-top: 2%;
      margin-bottom: 2%;
      color: red;
    }
    .msg{
        font-size: 50%;
    }
    .button{
        margin-top: 5%;
    }
  }
`;

export const Labels = styled.div`
  @media (min-width: 375px) {
    display: flex;
    flex-direction: column;
    text-align: justify;
    margin-bottom: 5%;
    max-width: 55%;
  }
`;
