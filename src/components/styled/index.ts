import React from 'react';
import styled from 'styled-components/native';


//Styled Component - We can either move it separate for common purpose, I am creating here just to save my time for challenge 
//even we can move color theme separate

const Container = styled.View`
  flex: 1
`;

const Header = styled.View`
  flex: 0.2;
  align-items: center;
  justify-content: center;
`;

const Body = styled.View`
  border-top-width: 1px;
  border-top-color: #edecfe ;
  border-bottom-width: 1px;
  border-bottom-color: #edecfe ;
  flex: 0.7;
  background-color: #edecfe 
`;

const Footer = styled.View`
  flex: 0.1;
  align-items: center;
  justify-content: center;
`;

const Button = styled.TouchableOpacity`
  height : 38px;
  width : 70%;
  border-radius : 19px;
  justify-content: center;
  align-items: center;
  background-color: #835eec 
`;

const ButtonText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight : 700;
`;

const LogoText = styled.Text`
  font-size: 18px;
  color: #3a0c3e;
  font-weight : 300;
  margin-top: 8px
`;

const MapView = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #edecfe ;
  flex: 0.9;
 
`;

const Card = styled.TouchableOpacity`
  padding : 12px;
  background-color: #fff;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  shadow-offset: 0px 1px;
  elevation: 5;
  min-height: 74px;
  margin-left: 16px;
  margin-right: 16px;
  justify-content: space-between;
`;

const Separator = styled.View`
  height: 16px
`;

const AddressView = styled.View`
  flex-direction : row;
  justify-content: space-between;
`;

const Title = styled.Text`
 font-size : 16px;
 font-weight : 700;
 color: #3a0c3e;
`;

// example to pass the props to styled component
const Subtitle = styled.Text`
font-size : 12px;
font-weight : 300;
color: #835eec;
font-style: ${(props: any) => props.italic ? 'italic' : 'normal'};  
`;

const MarkerView = styled.View`
width: 22px;
height: 22px;
border-radius:11px;
border-width:2px;
border-color: #fff;
align-items : center;
justify-content : center;
background-color: #3a0c3e;
`;

const MarkerText = styled.Text`
font-size : 9px;
font-weight : bold;
color: #fff;
padding-left : 1px;
`;


const MapSelfLocationButton = styled.TouchableOpacity`
  height : 38px;
  width : 40%;
  border-radius : 19px;
  justify-content: center;
  align-items: center;
  background-color: ${(props: any) => props.active ? '#835eec' : '#fff'};
  position: absolute;
  bottom: 10px;
  right : 10px;
`;

const MapSelfLocationButtonText = styled.Text`
  font-size: 12px;
  color: ${(props: any) => props.active ? '#fff' : 'grey'};
  font-weight : 400;
`;

const Loader = styled.ActivityIndicator`
  margin-top : 16px
`;

const ErrorMessage = styled.Text`
font-size : 14px;
font-weight : 600;
color: red;
margin : 8px
`;

export {
  Container,
  Header,
  Body,
  Footer,
  Button,
  ButtonText,
  LogoText,
  MapView,
  Card,
  Separator,
  AddressView,
  Title,
  Subtitle,
  MarkerView,
  MarkerText,
  MapSelfLocationButton,
  MapSelfLocationButtonText,
  Loader,
  ErrorMessage
}