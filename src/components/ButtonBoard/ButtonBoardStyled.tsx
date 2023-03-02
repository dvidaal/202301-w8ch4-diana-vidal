import styled from "styled-components";

const ButtonBoardStyled = styled.section`
  width: 365px;
  height: 570px;
  background: linear-gradient(156.9deg, #3e566b 0%, #21384e 100.39%);
  box-shadow: 8px 7px 19px rgb(0 0 0 / 30%);
  border-radius: 30px;

  button {
    width: 70px;
    height: 70px;
    font-size: 25px;
    color: #d8d8d8;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    background: #536576;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 15px;
    text-decoration: none;
    border-color: #6c849b;
  }

  .wrapper {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    grid-auto-rows: minmax(80px, auto);

    padding: 190px 0 0 0;
  }
`;

export default ButtonBoardStyled;
