import React from 'react';
import styled from 'styled-components';
import ScheduleHeader from "../components/ScheduleHeader";
import ScheduleNavigator from "../navigation/ScheduleNavigator";

class ScheduleScreen extends React.Component{

    static navigationOptions = {
        header : <ScheduleHeader title="SCHEDULE" onSearch={this.onSearch} />,
    };
    onSearch = (text) => {
        console.log(text);
    };

    constructor(props){
        super(props);
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

export default ScheduleScreen;