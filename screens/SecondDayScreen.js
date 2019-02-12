import React from 'react';
import ActivityListItem from "../components/ActivityListItem";

class SecondDayScreen extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <ActivityListItem indexDay={1} />
        )
    }
}


export default SecondDayScreen;