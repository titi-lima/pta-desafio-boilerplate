import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled.div`
  display:flex;
  width:100vw;
  height:90vh;
  justify-content: space-evenly;
`;

export const LoginContainer = styled.div`
  font-family: 'Poppins';
  box-sizing: border-box;
  margin-left:10vw;
  background: #FFFFFF;
  border: 0.5px solid #878787;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding:10px 35px;
  width:56.7vw;
  height:94vh;
  h3 {
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 38px;
  }
  #pid {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    text-align:center;
    color: #7D7D7D;
    padding-bottom:20px;
  }
  #myspan {
    color:black;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Form = styled.div`
  h6 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
  input {
    background:transparent;
    border: 0.6px solid #282828;
    border-radius: 6px;
    padding:20px 20px;
    position:relative;
    width:100%;
  }
  padding: 10px 5px 10px 0px;
  svg {
    position:relative;
    margin-left:-40px;
    transform:scaleX(-1);
  }
`;

export const H2 = styled.h2`
  padding: 3vh 3vw;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`
export const ButtonStyled = styled(Button)`
  margin:10px;
  width: 100%;
  background-color: black;
  color: white;
  border: none;
  padding: 12px 24px;
  height: 51px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 18px;
  &:hover{
    background: black;
  }
`