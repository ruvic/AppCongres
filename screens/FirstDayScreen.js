import React from 'react';
import styled from 'styled-components';
import ActivityListItem from "../components/ActivityListItem";
import {getFirebaseData} from "../Firebase";
import {connect} from "react-redux";
import {retrieve, store} from "../storage/Storage";
import {objectToArray} from "../helpers/helpers";

class FirstDayScreen extends React.Component{

    updateData = (data) => {
        var sessionsId = [];
        retrieve("data", (storeData) => {
            if(storeData){
                objectToArray(storeData.schedule).forEach((schedule) => {
                    var daySessionId = [];
                    objectToArray(schedule.groups).forEach((group) => {
                        objectToArray(group.sessions).forEach((session) => {
                            if(session.isFavorite){
                                daySessionId.push(session.id);
                            }
                        });
                    });
                    sessionsId.push(daySessionId);
                });

                objectToArray(data.schedule).forEach((schedule, index) => {
                    objectToArray(schedule.groups).forEach((group) => {
                        objectToArray(group.sessions).forEach((session) => {
                            session.isFavorite = sessionsId[index].indexOf(session.id) >=0;
                        });
                    });
                });
            }

            this.props.dispatch({
                type : 'UPDATE_APP_DATA',
                value : data,
            });

            store("data", data);

        });

    };


    constructor(props){
        super(props);
        getFirebaseData(this.updateData);
    }

    render(){
        return(
            <ActivityListItem indexDay={0}/>
        )
    }
}

const Container = styled.View`
  flex : 1;
`;

export default connect()(FirstDayScreen);