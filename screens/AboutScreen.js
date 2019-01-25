import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

class AboutScreen extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Text>About Screen</Text>
            </Container>
        )
    }
}

const Container = styled.View`
  flex : 1;
  align-items: center;
  justify-content: center;
`;

export default AboutScreen ;