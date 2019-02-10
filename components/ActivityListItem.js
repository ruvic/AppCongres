import React from 'react';
import styled from 'styled-components';
import ActivityItem from "./ActivityItem";
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {connect} from "react-redux";
import {objectToArray} from "../helpers/helpers";
import Colors from "../constants/Colors";
import EmptyData from "./EmtptyData";


class ActivityListItem extends React.Component{

    constructor(props){
        super(props);
    }

    onPress = (item) => {
        if(this.props.scheduleNavigation.schedule){
            this.props.scheduleNavigation.navigation.navigate("ActivityDetails", { sessionItem : item });
        }else{
            this.props.scheduleNavigation.navigation.navigate("FavoriteActivityDetails", { sessionItem : item });
        }
    };

    _filterFavoriteSession(sessions){
        var result = [];
        if(sessions){
            objectToArray(sessions).forEach((session) => {
                if(session.isFavorite){
                    result.push(session);
                }
            });
        }
        return result;
    }

    render(){
        if(this.props.data){
            let schedule = this.props.data.schedule;
            if(this.props.isFavorite && this.props.scheduleFavoriteFilter){
                schedule = this.props.scheduleFavoriteFilter;
            }else if(this.props.scheduleFilter){
                schedule = this.props.scheduleFilter;
            }
            if(!schedule[this.props.indexDay].groups){
                return(<EmptyData/>);
            }
            return(
                <ScrollView>
                    {
                        objectToArray(schedule[this.props.indexDay].groups).map((group, indexGrp) => {
                            var item = group;
                            var sessions = objectToArray(group.sessions);
                            if(!sessions || sessions.length === 0){
                                return(<View/>);
                            }
                            if(this.props.isFavorite){
                                // item = (group.isFavorite) ? group : null;
                                sessions = this._filterFavoriteSession(group.sessions);
                                item = (sessions.length > 0)?group : null;
                            }
                            if(item){
                                return (
                                    <Container>
                                        <Hour>{item.time}</Hour>
                                        <LineSeperator/>
                                        <ActivityItems>
                                            {
                                                sessions.map((session, indexSession) => {
                                                    return(
                                                        <ActivityItem
                                                            item={session}
                                                            indexDay ={this.props.indexDay}
                                                            indexGroup={indexGrp}
                                                            indexSession={indexSession}
                                                            isFavorite = {this.props.isFavorite}
                                                            tracks={session.tracks[0]}
                                                            onPress={this.onPress} />
                                                    )
                                                })
                                            }
                                        </ActivityItems>
                                    </Container>
                                )
                            }else {
                                return(
                                    <View/>
                                )
                            }
                        })
                    }
                </ScrollView>
            )
        }else{
            return(
                <View style={{ flex : 1, alignItems:'center', justifyContent:'center' }}>
                    <ActivityIndicator size="large" color={Colors.primaryColor}/>
                </View>
            )
        }

    }
}

const Container = styled.View`
  margin-left: 15px;
`;

const Hour = styled.Text`
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: grey;
`;

const LineSeperator = styled.View`
  width: 100%;
  height: 1px;
  background-color: #cacfca;
`;

const ActivityItems = styled.View`
  margin-left: 25px;
`;

const CustomFlatList = styled.FlatList`
  margin-bottom: 10px;
`;
const mapStateToProps = (state) => {
    return {
        scheduleNavigation : state.updateGlobalData.scheduleNavigation,
        data : state.updateAppData.data,
        scheduleFilter : state.updateFilterData.scheduleFilter,
        scheduleFavoriteFilter : state.updateFilterData.scheduleFavoriteFilter,
    }
};

export default connect(mapStateToProps)(ActivityListItem);