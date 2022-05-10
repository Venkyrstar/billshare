import React, { useState } from 'react'
import { StatusBar } from "expo-status-bar";

import {
  MainContainer,
  SubContainer,
  LoginTitle,
  BillShareLogo,
  StyledButton,
  ButtonText,
  AddlView,
  AddlText,
  LoginLink,
  LoginLinkContent,
  FieldText,
  FieldView
} from './../components/styles';

import Authentication from '../api/Authentication';
import { useLocalStorage } from '../api/MyHooks';
import { useNavigate } from 'react-router-dom';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isIncorrect, setIncorrect] = useState(false);

  let [localEmail, setLocalEmail] = useLocalStorage('localEmail', '')

    let login = (email, password) => {
        // console.log(email + " : " + password)
        Authentication
        .executeJWTAuthService(email, password)
        .then((response) => {
            console.log(email)
            setLocalEmail(email)
            Authentication.setupAxiosIntercetors('Bearer ' + response.data.token)
            navigation.navigate('/home')
        })
        .catch(
            (error) => {
            setIncorrect(true);
            setTimeout(()=>{setIncorrect(false)},2000)
        }
        )
    }

  return (
    <MainContainer>
      <StatusBar style="auto" />
        <SubContainer>
            <BillShareLogo resizeMode="cover" source={require("./../assets/images/billshare.png")}></BillShareLogo>
            <LoginTitle>Account Login</LoginTitle>
            {isIncorrect &&  <Text>Incorrect username or password</Text>}
            <FieldView>
              <FieldText
                placeholder="Email"
                placeholderTextColor="#333333"
                onChangeText={(email) => setEmail(email)} 
              />
            </FieldView>
            <FieldView>
              <FieldText
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)} 
              />
            </FieldView>
            <StyledButton>
                <ButtonText onClick={() => login(email,password)}>Login</ButtonText>
            </StyledButton>
            <AddlView>
                <AddlText>Don't have an account? </AddlText>
                <LoginLink>
                    <LoginLinkContent onClick={() => navigation.navigate('Register')}>Register</LoginLinkContent>
                </LoginLink>
            </AddlView>
        </SubContainer>
    </MainContainer>
  )
}

export default Login
