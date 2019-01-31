import React from 'react';
import styled from 'styled-components';
import ActivityItem from "./ActivityItem";
import {FlatList} from 'react-native';
import {connect} from "react-redux";


class ActivityListItem extends React.Component{

    onPress = (item) => {
        if(this.props.scheduleNavigation.schedule){
            this.props.scheduleNavigation.navigation.navigate("ActivityDetails", { tracks : this.tracks });
        }else{
            this.props.scheduleNavigation.navigation.navigate("FavoriteActivityDetails", { tracks : this.tracks });
        }
    };
    _renderActivityItem = ({item}) => {

        let tracks = "";
        if(item === 0){
            tracks = "Symposium";
        }else if (item === 1){
            tracks = "Food";
        }else if (item === 2){
            tracks = "Abstracts";
        }else{
            tracks = "CME";
        }

        this.tracks  = tracks;

        return (
            <ActivityItem
                item={item}
                tracks={tracks}
                onPress={this.onPress} />
        )
    };
    list = [0,1,2,3];
    _renderActivityListIem = ({item}) => {
        return (
            <Container>
                <Hour>02:30 PM</Hour>
                <LineSeperator/>
                <ActivityItems>
                    <FlatList
                        data={this.list}
                        keyExtractor={(item, index) => ""+item}
                        renderItem={this._renderActivityItem}
                    />
                </ActivityItems>
            </Container>
        )
    };

    constructor(props){
        super(props);
        this.tracks ="Symposium";
    }

    render(){
        return(
            <CustomFlatList
                data={this.list}
                keyExtractor={(item, index) => ""+item}
                renderItem={this._renderActivityListIem}
            />
        )
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
        scheduleNavigation : state.updateGlobalData.scheduleNavigation
    }
};

export default connect(mapStateToProps)(ActivityListItem);