import React from 'react';
import ActivityListItem from "../components/ActivityListItem";

class ThirdDayScreen extends React.Component{

    static navigationOptions = {
        title : 'FRI 05',
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

export default ThirdDayScreen;
