import styled from "styled-components";
import { useHistory } from "react-router-dom";
import React, {useContext} from 'react';
import AppContext from '../../components/AppContext';

const LogInDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #003972;
  color: #ffffff;
`;

const TextDiv = styled.div`
  text-align: left;
  padding-left: 4em;
  & h1 {
    font-size: 4em;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  & p {
    margin-top: 0;
    font-size: 1.5em;
  }
`;

const Content = styled.div`
  display: flex;
  height: 75vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  width: 55%;
  height: 75vh;
  border-radius: 6px;
  background-color: #ffffff;
  color: #000000;
  box-shadow: 5px 1px 12px rgba(0, 0, 0, 0.5);
  margin-bottom: 4em;
`;

const CardContent = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-items: center;
  align-items: center;

  & h2 {
    padding-top: 0;
    margin-top: 0;
    font-size: 2em;
  }

  & p {
    padding-left: 2em;
    padding-right: 2em;
    font-size: 1.5em;
  }

  & button {
    margin-top: 2em;
    color: #ffffff;
    padding-top: 2em;
    padding-bottom: 2em;
    padding-right: 4em;
    padding-left: 4em;
    border: none;
    border-radius: 40px;
    background-color: #003972;

    & p {
      font-size: 2.5em;
      padding: 0;
      margin: 0;
    }
  }

  & button:hover {
    background-color: #002d5a;
  }

  & form {
    width: 80%;
    padding: 2em;
  }
`;

const Field = styled.div`
  padding-bottom: 2em;  
  display: flex;
  text-align: left;
  width: 100%;
  flex-direction: column;

  & p {
    padding: 0;
    margin: 0;
  }

  & input {
    font-family: 'Hind', sans-serif;
    font-size: 1.5em;
    padding-left: 0.5em;
    height: 3em;
    border-radius: 2px;
  }

  & input:focus {
    border: 3px solid #555;
  }
`;

const CheckBoxField = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  
  & input {
    padding: 0;
    margin: 0;
      height: 2em;
      width: 2em;
  }
  
  & label {
      padding: 0;
      margin: 0;
  }
  
  & p {
      padding: 0;
      margin: 0;
      padding-left: 1em;
  }
`;

const LogIn = () => {

  const { isPatient, setVideoNumber } = useContext(AppContext);
  let history = useHistory();
  setVideoNumber(1);

  return (
    <LogInDiv>
      <TextDiv>
        <h1>Log In</h1>
      </TextDiv>
      <Content>
        <Card>
          <CardContent>
            <form action="#">
              <Field>
                <label class="form-label">
                  <p>Email</p>
                </label>
                <input type="text" class="form-control" placeholder="email@email.com"/>
              </Field>
              <Field>
                <label class="form-label">
                  <p>Password</p>
                </label>
                <input type="password" class="form-control" placeholder="••••••••••"/>
              </Field>
              <CheckBoxField>
                <input type="checkbox" class="form-check-input" />
                <label class="form-label"><p>Remember Me</p></label>
              </CheckBoxField>
              <button onClick={() => {history.push(isPatient ? "/startStudy" : "/clinicians")}}><p>Log In</p></button>
            </form>
          </CardContent>
        </Card>
      </Content>
    </LogInDiv>
  );
};

export default LogIn;
