import { useState } from "react";

interface ButtonProps {
  name: string;
}
const Button = ({ name: text }: ButtonProps): JSX.Element => {
  const [, setInitialValue] = useState("");

  const handleValueChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setInitialValue(event.currentTarget.name);
  };

  return (
    <button name={text} onClick={handleValueChange}>
      {text}
    </button>
  );
};

export default Button;
