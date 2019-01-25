import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

class SpeakersScreen extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Text>Speakers Screen</Text>
            </Container>
        )
    }
}

const Container = styled.View`
  flex : 1;
  align-items: center;
  justify-content: center;
`;

export default SpeakersScreen ;