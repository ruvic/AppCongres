import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components';

export default class EmptyData extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <EmptyText>No data to display...</EmptyText>
            </Container>
        )
    }
}

const Container = styled.View`
  flex : 1;
  align-items: center;
  justify-content: center;
`;

const EmptyText = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

const styles = StyleSheet.create({

});