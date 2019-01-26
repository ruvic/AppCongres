import React from 'react';
import styled from 'styled-components';
import {Text} from 'react-native';

export default class ActivityList extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Text>Liste des activités</Text>
            </Container>
        )
    }
}

const Container = styled.View`
  flex : 1;
  justify-content: center;
  align-items: center;
`;