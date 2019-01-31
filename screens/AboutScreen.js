import React from 'react';
import styled from 'styled-components';
import ScheduleHeader from "../components/ScheduleHeader";
import {StyleSheet} from "react-native";

class AboutScreen extends React.Component{

    static navigationOptions = {
        header : <ScheduleHeader title="ABOUT" icon="md-information-circle"/>,
    };

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <ImagePlace source={require('../assets/images/place.jpg')}/>
                <Lieu>National Museum of Yaoundé</Lieu>
                <Date>Monday, 31 January 2019</Date>
                <Description>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio</Description>
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
`;

const Label = styled.Text`
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
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

export default AboutScreen;