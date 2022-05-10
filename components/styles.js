import styled from 'styled-components';
// import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

export const colors = {
    //list all colors
    darkblue: "#2A2073",
    white: "#FFFFFF",
    blueblack: "#1B1A2D",
    greyblack: "#333333",
    whiteblue: "#3F3D56",
}

const {darkblue, white, blueblack, greyblack, whiteblue} = colors;

//Onboarding Page
export const MainContainer = styled.View`
    flex: 1;
    padding: 25px;
    width: 100%;
    height: 100%;
    padding-top: ${statusBarHeight + 10}px;
    background-color: ${white};
`;

export const SubContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const OnBoardImage = styled.ImageBackground`
    width: 414px;
    height: 360px;
`;

export const PageTitle = styled.Text`
    padding-top: 25px;
    font-size: 25px;
    text-align: left;
    width: 382px;
    height: 82px;
    color: ${blueblack};
`

export const PageContent = styled.Text`
    opacity: 0.7;
    padding-top: 20px;
    font-size: 15px;
    text-align: left;
    width: 382px;
    height: 120px;
    color: ${blueblack};
`

export const ColoredLine = styled.View`
    padding-top: 25px;
    background-color: ${darkblue};
    width: 414px;
    height: 1px;
`

export const StyledButton = styled.TouchableOpacity`
    background-color: ${darkblue};
    padding: 22px 25px;
    width: 382px;
    height: 64px;
    border-radius: 8px;
`

export const ButtonText = styled.Text`
    color: ${white};
    font-size: 16px;
    text-align: center;
`

export const AddlView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`

export const AddlText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${blueblack};
    font-size: 15px;
`

export const LoginLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`

export const LoginLinkContent = styled.Text`
    color: ${darkblue};
    font-size: 15px;
`
//Login Page
export const BillShareLogo = styled.ImageBackground`
    top: 25px;
    width: 150px;
    height: 150px;
`;

export const LoginTitle = styled.Text`
    padding-top: 35px;
    padding-bottom: 25px;
    font-size: 20px;
    text-align: center;
    color: ${blueblack};
`
// export const StyledFormArea = styled.View`
//     width: 90%
// `
export const FieldView = styled.View`
    backgroundColor: #9cc2d6;
    borderRadius: 8px;
    width: 80%;
    height: 45px;
    marginBottom: 20px;
`

export const FieldText = styled.TextInput`
    backgroundColor: #9cc2d6;
    height: 50px;
    flex: 1;
    padding: 10px;
    marginLeft: 20px;
    marginRight: 20px;
`