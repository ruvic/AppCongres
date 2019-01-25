import React from 'react';
import styled from 'styled-components';
import {Text} from 'react-native';

export default class FirstDayScreen extends React.Component{

    static navigationOptions = {
        title : 'WED 03',
    };

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Text>Premier jour</Text>
            </Container>
        )
    }
}

const Container = styled.View`
  flex : 1;
`;