import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ScheduleHeader from "../components/ScheduleHeader";
import {Body, Container, Content, Left, ListItem, Right, Text, Thumbnail} from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {connect} from "react-redux";

class SpeakersScreen extends React.Component{

    static navigationOptions = {
        header : <ScheduleHeader speaker searchBar title="SPEAKERS" icon="md-contacts" onSearch={this.onSearch} />,
    };

    onSearch = (text) => {
        console.log(text);
    };

    constructor(props){
        super(props);
    }


    message = "Doing what you like will always keep you happy Doing what you like will always keep you happy Doing what you like will always keep you happy Doing what you like will always keep you happy";
    list = [0,1,2,3,4,5,6,7,8,9];
    _renderItem = ({item}) => {
        return (
            <ListItem avatar key={""+item} onPress={() => this._onSpeakerItemClick(item)}>
                <Left style={styles.left}>
                    <Thumbnail source={require('../assets/images/toto.jpg')} />
                </Left>
                <Body>
                <Text style={styles.name}>Kumar Pratik</Text>
                <Text numberOfLines={2} note>{this.message}</Text>
                </Body>
                <Right style={styles.right}>
                    <Ionicon
                        name={"md-arrow-dropright"}
                        color={"black"}
                        size={25}
                    />
                </Right>
            </ListItem>
        )
    };

    _onSpeakerItemClick(data){
        this.props.navigation.navigate("SpeakerDetails");
    };

    componentDidMount(){

    };

    render(){
        return(
            <Container>
                <Content>
                    <FlatList
                        data={this.list}
                        keyExtractor={(item, index) => ""+item}
                        renderItem={this._renderItem}
                    />
                </Content>
            </Container>
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

export default connect()(SpeakersScreen);