import React from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";
import MainTabNavigator from "../navigation/MainTabNavigator";

class MainScreen extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        alert(JSON.stringify(this.props));
    }

    render(){
        return(
            <MainTabNavigator />
        )
    }
}

const Container = styled.View`
  flex : 1;
`;

export default connect()(MainScreen);