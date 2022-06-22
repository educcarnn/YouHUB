import styled from "styled-components";

export const AddStyle = styled.div`
@media (min-width: 375px) {
  background: #212529;
  width: 15rem;
  height: 9rem;
  position: fixed;
  display: flex; 
  padding-bottom: 5%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: -3%;

  .textFirst{
    font-size: 65%;
  }
  .registerTech {
    margin-top: 7%;
    font-family: 'Inter', sans-serif;
    background: #FF577F;
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
  .buttonClick{
    background-color: transparent;
    color: white;
    border: none;
  }
  .RegisterTech{
    background-color: #343B41;
    padding-bottom: 1%;
    width: 130%;
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
}
@media (min-width: 768px) {
    width: 65vh;
    margin-top: -10%;
}
`

export const FormNew = styled.form`
@media (min-width: 375px) {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  justify-content: center;
  gap: 5%;
}
`;
