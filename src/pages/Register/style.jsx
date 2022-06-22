import styled from "styled-components";

export const FormRegister = styled.form`
    display: flex;
    background-color: #212529;
    flex-direction: column;
    max-width: 150%;
    max-height: 500%;
    padding-left: 10%;
    padding-right: 8%;
    margin-left: -25%;
    margin-top: 5%;
    .error {
      max-width: 100%;
      font-size: 75%;
      margin-top: 2%;
      margin-bottom: 2%;
      color: red;
    }
    .msg{
        font-size: 50%;
        padding-top: 5%;
    }
    .button{
        margin-top: 5%;
    }
    
`