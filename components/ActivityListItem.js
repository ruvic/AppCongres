import React from 'react';
import styled from 'styled-components';
import ActivityItem from "./ActivityItem";
import {ActivityIndicator, FlatList, View} from 'react-native';
import {connect} from "react-redux";
import {objectToArray} from "../helpers/helpers";
import Colors from "../constants/Colors";


class ActivityListItem extends React.Component{

    onPress = (item) => {
        if(this.props.scheduleNavigation.schedule){
            this.props.scheduleNavigation.navigation.navigate("ActivityDetails", { tracks : this.tracks });
        }else{
            this.props.scheduleNavigation.navigation.navigate("FavoriteActivityDetails", { tracks : this.tracks });
        }
    };
    _renderActivityItem = ({item}) => {
        console.log("Passage 2");
        return (
            <ActivityItem
                item={item}
                tracks={item.tracks[0]}
                onPress={this.onPress} />
        )
    };

    constructor(props){
        super(props);
    }

    _renderActivityListItem(item){
        return (
            <Container>
                <Hour>{item.time}</Hour>
                <LineSeperator/>
                <ActivityItems>
                    <FlatList
                        data={objectToArray(item.sessions)}
                        keyExtractor={(item, index) => ''+item.id}
                        renderItem={this._renderActivityItem}
                    />
                </ActivityItems>
            </Container>
        )
    };

    componentDidMount(){

//        alert(JSON.stringify(this.props));

        this.props.dispatch({
            type : 'UPDATE_APP_DATAS',
            action : this.props.appData,
        });
    }

    render(){
        if(this.props.appData){
            return(
                <CustomFlatList
                    data={objectToArray(this.props.appData.schedule[this.props.indexDay].groups)}
                    keyExtractor={(item, index) => ''+item.time}
                    renderItem={({item}) => this._renderActivityListItem(item)}
                />
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
    // alert(state.updateAppData.datas);
    return {
        scheduleNavigation : state.updateGlobalData.scheduleNavigation,
    }
};

export default connect(mapStateToProps)(ActivityListItem);