import React from 'react';
import ActivityListItem from "../components/ActivityListItem";

class ThirdDayScreen extends React.Component{


    constructor(props){
        super(props);
    }

    render(){
        return(
            <ActivityListItem indexDay={2} />
        )
    }
}

export default ThirdDayScreen;
