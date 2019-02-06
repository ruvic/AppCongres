import React from 'react';
import styled from 'styled-components';
import ActivityListItem from "../components/ActivityListItem";
import {connect} from "react-redux";

class FirstDayFavoriteScreen extends React.Component{

    static navigationOptions = {
        title : 'WED 03',
    };

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

// const mapStateToProps = (state) => {
//     alert(state.updateAppData.datas);
//     return {
//         Datas: state.updateAppData.datas
//     }
// };

export default connect()(FirstDayFavoriteScreen);