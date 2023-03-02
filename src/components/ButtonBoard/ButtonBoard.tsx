import Button from "../Button/Button";
import Display from "../Display/Display";
import ButtonBoardStyled from "./ButtonBoardStyled";

const ButtonBoard = (): JSX.Element => {
  const keyNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  return (
    <>
      <Display />
      <ButtonBoardStyled>
        <ol className="wrapper">
          {keyNumbers.map((keys, position) => (
            <li key={position}>
              <Button name={keys} />
            </li>
          ))}
        </ol>
      </ButtonBoardStyled>
    </>
  );
};

export default ButtonBoard;
