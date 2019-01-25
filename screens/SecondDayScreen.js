import React from 'react';
import styled from 'styled-components';
import {Text} from 'react-native';

export default class SecondDayScreen extends React.Component{

    static navigationOptions = {
        title : 'THU 04',
    };

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Text>Deuxième jour</Text>
            </Container>
        )
    }
}

const Container = styled.View`
  flex : 1;
`;