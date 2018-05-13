import { injectGlobal } from "styled-components";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    background: #FCFCFC;
  }

  h1 {
    font-size: 52px;
    font-weight: 500;
  }
  h2 {
    font-size: 44px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  h3 {
    font-size: 24px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  h4 {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 1px;
  }
  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
  }
  a {
    color: green;
    :hover, :focus, :active {
      color: red;
    }
  }
  

  ul {
    list-style: none;
    padding-left: 0;
  }
`;