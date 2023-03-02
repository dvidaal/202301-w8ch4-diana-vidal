import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Work Sans', sans serif;
  border: none;
  
}

.container{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7a99b9;
  min-height:100vh;
  padding: 20px;

}

ul,
ol,
li {
  margin: 0;
  padding: 0;
  list-style: none;
  
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none
}


h1,
h2 {
  margin: 0;

}

`;

export default GlobalStyles;
