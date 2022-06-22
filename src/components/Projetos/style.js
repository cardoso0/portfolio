import styled from "styled-components";

export const Bg = styled.div`
  background-color: #151515;
  color: white;
`

export const Main = styled.main`
  max-width: 80%;
  margin: 0 auto;
  padding-top: 2em;

  h1 {
    margin-top: 0;
    text-align: center;
  }

  @media (min-width: 768px) {
    max-width: 70%;
  }
`

export const Card = styled.div`
  padding-bottom: 3em;

  div {
    border: 1px solid black;
    width: 250px;
    height: 100px;
    margin: 0 auto;
  }
  .imgProject {
    width: 250px;
    border: 2px solid blue;
  }
  button {
    display: flex;
    border: 1px solid blue;
    border-radius: 5px;
    background-color: black;
    color: white;
    font-size: 1em;
    align-items: center;
  }
  .imgBtn {
    width: 20px;
    margin-right: 5px;
  }
`