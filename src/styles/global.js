import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body, #root {
    width: 100%;
    height: 100%

}

body {
    font-family: 'Roboto', sans-serif;
    color: rgba(238, 238, 238, 1)
}

`