import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
::before,
::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
}
body {
    height: 100%;
    width: 100%;
    scroll-behaviour: smooth;
    overflow-x: hidden;
    background-color: #fcf8f6
}
img{
    width:100%;
    height:100%;
}
@font-face{
    font-family: Roboto;
    src: url('../Assets/Fonts/Roboto-Bold.ttf) format('ttf');
    font-weight: 700;
    font-style: normal;
}
@font-face{
    font-family: Roboto;
    src: url('../Assets/Fonts/Roboto-Italic.ttf) format('ttf');
    font-weight: 400;
    font-style: italic;
}
@font-face{
    font-family: Roboto;
    src: url('../Assets/Fonts/Roboto-Medium.ttf) format('ttf');
    font-weight: 500;
    font-style: normal;
}
@font-face{
    font-family: Roboto;
    src: url('../Assets/Fonts/Roboto-Regular.ttf) format('ttf');
    font-weight: 400;
    font-style: normal;
}
`;
