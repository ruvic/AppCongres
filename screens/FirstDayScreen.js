import React from 'react';
import styled from 'styled-components';
import ActivityListItem from "../components/ActivityListItem";
import {getFirebaseData} from "../Firebase";
import {connect} from "react-redux";
import {retrieve, store} from "../storage/Storage";
import {objectToArray} from "../helpers/helpers";

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

        var sessionsId = [];
        retrieve("data", (storeData) => {
            objectToArray(storeData.schedule).forEach((schedule) => {
               objectToArray(schedule.groups).forEach((group) => {
                  objectToArray(group.sessions).forEach((session) => {
                    if(session.isFavorite){
                        sessionsId.push(session.id);
                    }
                  });
               });
            });

            objectToArray(data.schedule).forEach((schedule) => {
                objectToArray(schedule.groups).forEach((group) => {
                    objectToArray(group.sessions).forEach((session) => {
                        session.isFavorite = sessionsId.indexOf(session.id) >=0;
                    });
                });
            });

            store("data", data);

            this.props.dispatch({
                type : 'UPDATE_APP_DATA',
                value : data,
            });

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