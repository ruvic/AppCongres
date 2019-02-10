import React from 'react';
import ScheduleNavigator from "../navigation/ScheduleNavigator";
import {connect} from "react-redux";
import Header from "../components/Header";

class ScheduleScreen extends React.Component{

    static navigationOptions = {
        header : <Header searchBar title="SCHEDULE" icon="md-calendar" screen="schedule" />,
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

export default connect()(ScheduleScreen);