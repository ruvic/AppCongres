import React from 'react';
import styled from 'styled-components';
import ActivityListItem from "../components/ActivityListItem";
import {getFirebaseData} from "../Firebase";
import {connect} from "react-redux";

class FirstDayScreen extends React.Component{

    static navigationOptions = {
        title : 'WED 03',
    };

    // static navigationOptions = ({navigation}) => {
    //     // const { params = {} } = navigation.state;
    //     return {
    //         title: 'abc',
    //     };
    // };

    updateData = (data) => {
        this.props.dispatch({
            type : 'UPDATE_APP_DATA',
            value : data,
        });

    };

    constructor(props){
        super(props);
        getFirebaseData(this.updateData);
    }

    render(){
        return(
            <ActivityListItem indexDay={1}/>
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

export default connect()(FirstDayScreen);