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

const Register = ({ navigation }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [nickname, setNickName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <MainContainer>
      <StatusBar style="auto" />
        <SubContainer>
            <BillShareLogo resizeMode="cover" source={require("./../assets/images/billshare.png")}></BillShareLogo>
            <LoginTitle>Account Registration</LoginTitle>
            <FieldView>
              <FieldText
                placeholder="First Name"
                textContentType="givenName"
                onChangeText={(firstname) => setFirstName(firstname)} 
              />
            </FieldView>
            <FieldView>
              <FieldText
                placeholder="Last Name"
                textContentType="familyName"
                onChangeText={(lastname) => setLastName(lastname)} 
              />
            </FieldView>
            <FieldView>
              <FieldText
                placeholder="Nick Name"
                textContentType="nickname"
                onChangeText={(nickname) => setNickName(nickname)} 
              />
            </FieldView>
            <FieldView>
              <FieldText
                placeholder="Mobile number"
                textContentType="telephoneNumber"
                onChangeText={(mobile) => setMobile(mobile)} 
              />
            </FieldView>
            <FieldView>
              <FieldText
                placeholder="Email"
                textContentType="emailAddress"
                onChangeText={(email) => setEmail(email)} 
              />
            </FieldView>
            <FieldView>
              <FieldText
                placeholder="Password"
                textContentType="password"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)} 
              />
            </FieldView>
            
            <StyledButton>
                <ButtonText>Register</ButtonText>
            </StyledButton>
            <AddlView>
                <AddlText>Already have an account? </AddlText>
                <LoginLink>
                    <LoginLinkContent onClick={() => navigation.navigate('Login')}>Log In</LoginLinkContent>
                </LoginLink>
            </AddlView>
        </SubContainer>
    </MainContainer>
  )
}

export default Register
