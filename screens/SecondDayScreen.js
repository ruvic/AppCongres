import React from 'react';
import styled from 'styled-components';
import ActivityList from "../components/ActivityList";

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
                <ActivityList/>
            </Container>
        )
    }
}

const Container = styled.View`
  flex : 1;
`;