import React from 'react';
import styled from 'styled-components';
import {Text} from 'react-native';

export default class SpeakerDetailsScreen extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Text>Speaker details</Text>
            </Container>
        )
    }
}

const Container = styled.View`
  flex : 1;
  align-items: center;
  justify-content: center;
`;