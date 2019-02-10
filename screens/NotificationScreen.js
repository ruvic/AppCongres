import React from 'react';
import styled from 'styled-components';
import {StyleSheet, Text} from "react-native";
import Header from "../components/Header";

class NotificationScreen extends React.Component{

    static navigationOptions = {
        header : <Header title="NOTIFICATION"/>,
    };

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Text>Notification...</Text>
            </Container>
        )
    }
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 500px;
`;

const Label = styled.Text`
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Lieu = styled(Label)`

`;

const Date = styled(Label)`

`;

const Description = styled(Label)`
  text-align: center;
`;

const ImagePlace = styled.Image`
  width: 100%;
  height: 40%;
`;

const styles = StyleSheet.create({
    profilImage: {
        width:150,
        height:150,
        borderRadius:500,
        borderColor:'black'
    }
});

export default NotificationScreen;