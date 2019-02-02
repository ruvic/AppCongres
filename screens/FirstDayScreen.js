import React from 'react';
import styled from 'styled-components';
import ActivityListItem from "../components/ActivityListItem";
import {getFirebaseData} from "../Firebase";
import {connect} from "react-redux";

class FirstDayScreen extends React.Component{

    static navigationOptions = {
        title : 'WED 03',
    };

    updateData = (data) => {
        this.setState({
            data : data
        });
    };

    constructor(props){
        super(props);
        this.state = {
            data : null
        };
        getFirebaseData(this.updateData);
    }

    render(){
        return(
            <ActivityListItem appData={this.state.data} indexDay={1}/>
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