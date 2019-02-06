import React from 'react';
import styled from 'styled-components';
import ActivityItem from "./ActivityItem";
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {connect} from "react-redux";
import {objectToArray} from "../helpers/helpers";
import Colors from "../constants/Colors";


class ActivityListItem extends React.Component{

    _renderActivityListItem= (group)=>{
        var item = group;
        var sessions = objectToArray(group.sessions);
        if(this.props.isFavorite){
            item = (group.isFavorite) ? group : null;
            sessions = this._filterFavoriteSession(group.sessions);
        }
        if(item){
            return (
                <Container>
                    <Hour>{item.time}</Hour>
                    <LineSeperator/>
                    <ActivityItems>
                        {
                            sessions.map((session, index) => {
                               return(
                                   <ActivityItem
                                       item={session}
                                       index={index}
                                       tracks={objectToArray(session.tracks)[0]}
                                       onPress={this.onPress} />
                               )
                            })
                        }

                        {/*<FlatList*/}
                            {/*data={sessions}*/}
                            {/*keyExtractor={(item, index) => ''+item.id}*/}
                            {/*renderItem={this._renderActivityItem}*/}
                        {/*/>*/}
                    </ActivityItems>
                </Container>
            )
        }else {
            return(
                <View/>
            )
        }
    };

    onPress = (item) => {
        if(this.props.scheduleNavigation.schedule){
            this.props.scheduleNavigation.navigation.navigate("ActivityDetails", { sessionItem : item });
        }else{
            this.props.scheduleNavigation.navigation.navigate("FavoriteActivityDetails", { sessionItem : item });
        }
    };

    constructor(props){
        super(props);
        this.groupIndex = -1;
        this.sessionIndex = -1;
    }

    _renderActivityItem = ({item}) => {
        return (
            <ActivityItem
                item={item}
                tracks={item.tracks[0]}
                onPress={this.onPress} />
        )
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
            return(
                <ScrollView>
                    <Text>contentContainerStyle</Text>
                    {
                        objectToArray(this.props.data.schedule[this.props.indexDay].groups).map((group, indexGrp) => {
                            var item = group;
                            var sessions = objectToArray(group.sessions);
                            if(this.props.isFavorite){
                                item = (group.isFavorite) ? group : null;
                                sessions = this._filterFavoriteSession(group.sessions);
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
                                                            tracks={session.tracks[0]}
                                                            onPress={this.onPress} />
                                                    )
                                                })
                                            }
                                            {/*<FlatList*/}
                                            {/*data={sessions}*/}
                                            {/*keyExtractor={(item, index) => ''+item.id}*/}
                                            {/*renderItem={this._renderActivityItem}*/}
                                            {/*/>*/}
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
            // return(
            //     <CustomFlatList
            //         data={objectToArray(this.props.data.schedule[this.props.indexDay].groups)}
            //         keyExtractor={(item, index) => ''+item.time}
            //         renderItem={({item}) => this._renderActivityListItem(item)}
            //     />
            // )
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
    }
};

export default connect(mapStateToProps)(ActivityListItem);