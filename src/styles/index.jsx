import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body{
        background-color:#121214;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
        box-sizing: border-box;
        overflow-x: hidden;
        font-family: 'inter', sans-serif;
    }
    button{
        cursor: pointer;
    }

    li{
        list-style: none;
    }
`