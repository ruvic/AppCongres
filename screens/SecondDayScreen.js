import React from 'react';
import ActivityListItem from "../components/ActivityListItem";

class SecondDayScreen extends React.Component{

    static navigationOptions = {
        title : 'THU 04',
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


export default SecondDayScreen;