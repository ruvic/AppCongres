import React from 'react';
import styled from 'styled-components';
import ActivityListItem from "../components/ActivityListItem";

class FirstDayScreen extends React.Component{

    static navigationOptions = {
        title : 'WED 03',
    };

    constructor(props){
        super(props);
    }


    render(){
        return(
            <ActivityListItem/>
        )
    }
}

const Container = styled.View`
  flex : 1;
`;

export default FirstDayScreen;