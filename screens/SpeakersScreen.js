import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import ScheduleHeader from "../components/ScheduleHeader";
import {Body, Container, Content, Left, ListItem, Right, Text, Thumbnail} from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {connect} from "react-redux";
import {objectToArray} from "../helpers/helpers";

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
        return (
            <ListItem avatar key={item.id+''} onPress={() => this._onSpeakerItemClick(item)}>
                <Left style={styles.left}>
                    <Thumbnail source={require('../assets/images/profile.jpg')} />
                </Left>
                <Body>
                <Text style={styles.name}>{item.name}</Text>
                <Text numberOfLines={2} note>{item.about}</Text>
                </Body>
                <Right style={styles.right}>
                    <Ionicon
                        name={"ios-arrow-forward"}
                        color={"grey"}
                        size={21}
                    />
                </Right>
            </ListItem>
        )
    };

    _onSpeakerItemClick(data){
        this.props.navigation.navigate("SpeakerDetails", { item : data });
    };

    componentDidMount(){

    };

    render(){
        if(this.props.data.speakers){
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