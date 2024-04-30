import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    &{
--strong-cyan: hsl(172, 67%, 45%);
--very-dark-cyan: hsl(183, 100%, 15%);
--dark-grayish-cyan: hsl(186, 14%, 43%);
--grayish-cyan: hsl(184, 14%, 56%);
--light-grayish-cyan: hsl(185, 41%, 84%);
--very-light-grayish-cyan: hsl(189, 41%, 97%);
--color-white: hsl(0, 0%, 100%);
--red: hsl(0, 100%, 50%);
    }
}

*,::after,::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}

body{
    font-family: "Space Mono", monospace;
    height: 100vh;
    background-color: var(--light-grayish-cyan);
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

`;

export default GlobalStyle;
