import React from 'react';
import styled from 'styled-components';
import ScheduleHeader from "../components/ScheduleHeader";
import ScheduleNavigator from "../navigation/ScheduleNavigator";
import {connect} from "react-redux";

class ScheduleScreen extends React.Component{

    static navigationOptions = {
        header : <ScheduleHeader searchBar title="SCHEDULE" icon="md-calendar" onSearch={this.onSearch} />,
    };

    onSearch = (text) => {
        console.log(text);
    };

    constructor(props){
        super(props);
    }

    _componentFocused = ()=>{
        const data = {
            schedule : true,
            navigation : this.props.navigation
        };

        const action = {
            type: 'UPDATE_SCHEDULE_AND_FAVORITE_NAV',
            value: data
        };
        this.props.dispatch(action);

    };

    componentDidMount(){

        this._componentFocused();

        this._sub = this.props.navigation.addListener(
            'didFocus',
            this._componentFocused
        );
    }

    componentWillUnmount() {
        this._sub.remove();
    }

    render(){
        return(
            <ScheduleNavigator/>
        )
    }
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

// const mapStateToProps = (state) => {
//     return {
//         GameGlobal: state.updateGameData.GameData
//     }
// };

// export default connect(mapStateToProps)(ScheduleScreen);
export default connect()(ScheduleScreen);