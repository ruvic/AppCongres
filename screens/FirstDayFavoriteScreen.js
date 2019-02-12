import React from 'react';
import styled from 'styled-components';
import ActivityListItem from "../components/ActivityListItem";
import {connect} from "react-redux";

class FirstDayFavoriteScreen extends React.Component{


    constructor(props){
        super(props);
    }

    render(){
        return(
            <ActivityListItem isFavorite indexDay={0}/>
        )
    }
}

const Container = styled.View`
  flex : 1;
`;

export default connect()(FirstDayFavoriteScreen);