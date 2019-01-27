import React from 'react';
import styled from 'styled-components';
import ActivityItem from "./ActivityItem";
import {FlatList} from 'react-native';
import {connect} from "react-redux";


class ActivityListItem extends React.Component{

    onPress = (item) => {
      console.log("On Click : "+item);
        if(this.props.scheduleNavigation.schedule){
            this.props.scheduleNavigation.navigation.navigate("ActivityDetails");
        }else{
            this.props.scheduleNavigation.navigation.navigate("FavoriteActivityDetails");
        }
    };
    _renderActivityItem = ({item}) => {
        return (
            <ActivityItem
                item={item}
                tracks='Symposium'
                onPress={this.onPress} />
        )
    };
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
    list = [0,1,2];

    constructor(props){
        super(props);
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
  background-color: grey;
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