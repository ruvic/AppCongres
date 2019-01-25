import React from 'react';
import styled from 'styled-components';
import {Text} from 'react-native';

export default class ThirdDayScreen extends React.Component{

    static navigationOptions = {
        title : 'FRI 05',
    };

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Text>Troisième jour</Text>
            </Container>
        )
    }
}

const Container = styled.View`
  flex : 1;
`;