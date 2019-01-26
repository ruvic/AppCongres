import React from 'react';
import styled from 'styled-components';
import ScheduleHeader from "../components/ScheduleHeader";
import {Text} from "react-native";

class SpeakersScreen extends React.Component{

    static navigationOptions = {
        header : <ScheduleHeader title="SPEAKERS" onSearch={this.onSearch} />,
    };

    onSearch = (text) => {
        console.log(text);
    };

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Text>Liste des orateurs et des moderateurs</Text>
            </Container>
        )
    }
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default SpeakersScreen;