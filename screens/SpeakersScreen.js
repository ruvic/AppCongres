import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import ScheduleHeader from "../components/ScheduleHeader";
import {Container, Content} from 'native-base';
import {connect} from "react-redux";
import {objectToArray} from "../helpers/helpers";
import Colors from "../constants/Colors";
import SpeakerItem from "../components/SpeakerItem";

class SpeakersScreen extends React.Component{

    static navigationOptions = {
        header : <ScheduleHeader speaker searchBar title="SPEAKERS" onSearch={this.onSearch} />,
    };

    onSearch = (text) => {
        console.log(text);
    };

    constructor(props){
        super(props);
    }

    _renderItem = ({item}) => {
      return(
        <SpeakerItem
            item={item}
            onPress = {this.onSpeakerItemClick}
        />
      );
    };

    onSpeakerItemClick = (data) => {
        this.props.navigation.navigate("SpeakerDetails", { item : data });
    };

    componentDidMount(){

    };

    render(){
        if(this.props.data){
            return(
                <Container>
                    <Content>
                        <FlatList
                            data={objectToArray(this.props.data.speakers)}
                            keyExtractor={(item, index) => item.id+""}
                            renderItem={this._renderItem}
                        />
                    </Content>
                </Container>
            )
        }
        return(
            <View style={{ flex : 1, alignItems:'center', justifyContent:'center' }}>
                <ActivityIndicator size="large" color={Colors.primaryColor}/>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    left : {
        alignItems: 'center',
        justifyContent:'center'
    },
    right : {
        alignItems: 'center',
        justifyContent:'center'
    },
    name : {
        fontWeight: 'bold'
    },
});


const mapStateToProps = (state) => {
    return {
        data: state.updateAppData.data
    }
};

export default connect(mapStateToProps)(SpeakersScreen);