import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import styled from 'styled-components';
import {Body, Container, Content, Left, ListItem, Right, Text, Thumbnail} from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default class SpeakerItem extends React.Component{

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

    constructor(props){
        super(props);
    }

    _onSpeakerItemClick(data){
        console.log(data);
    };

    render(){
        return(
            <Container>
                <Content>
                    <FlatList
                        data={this.list}
                        keyExtractor={(item, index) => item}
                        renderItem={this._renderItem}
                    />
                </Content>
            </Container>
        )
    }
}

const MainContainer = styled.View`
  flex: 1;
`;

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