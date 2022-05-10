import React from 'react'
import { StatusBar } from "expo-status-bar";

import {
    MainContainer,
    SubContainer,
    PageTitle,
    OnBoardImage,
    PageContent,
    ColoredLine,
    StyledButton,
    ButtonText,
    AddlView,
    AddlText,
    LoginLink,
    LoginLinkContent
} from './../components/styles';

const Onboarding = ({ navigation }) => {
  return (
    <MainContainer>
        <StatusBar style="auto" />
        <SubContainer>
            <ColoredLine></ColoredLine>
            <OnBoardImage resizeMode="cover" source={require("./../assets/images/vector.png")}></OnBoardImage>
            <ColoredLine></ColoredLine>
            <PageTitle>Pay bills at the most appropriate time</PageTitle>
            <PageContent>Get occasional reminders to pay your bill at the right time and before deadlines. We help you avoid the rush that comes with forgetting to pay a bill by sending you reminders according to the importance of the bill.</PageContent>
            <StyledButton onPress={() => navigation.navigate('Register')}>
                <ButtonText>Create an account</ButtonText>
            </StyledButton>
            <AddlView>
                <AddlText>Already have an account? </AddlText>
                <LoginLink>
                    <LoginLinkContent onPress={() => navigation.navigate('Login')}>Log In</LoginLinkContent>
                </LoginLink>
            </AddlView>
        </SubContainer>
    </MainContainer>
  )
}

export default Onboarding
