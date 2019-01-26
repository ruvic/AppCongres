import React from 'react';
import styled from 'styled-components';
import {Body, Container, Content, Left, List, ListItem, Right, Text, Thumbnail} from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Colors from "../constants/Colors";

export default class Item extends React.Component{

    message = "Doing what you like will always keep you happy Doing what you like will always keep you happy Doing what you like will always keep you happy Doing what you like will always keep you happy";

    constructor(props){
        super(props);
    }

    render(){
        return(
            <MainContainer>
                <Container>
                    <Content>
                        <List>
                            <ListItem avatar button={true} onPress={() => console.log("Passage......")}>
                                <Left style={{ alignItems: 'center', justifyContent:'center' }}>
                                    <Thumbnail source={require('../assets/images/toto.jpg')} />
                                </Left>
                                <Body>
                                <Text style={{ fontWeight: 'bold' }}>Kumar Pratik</Text>
                                <Text numberOfLines={3} note>{this.message}</Text>
                                </Body>
                                <Right style={{ alignItems: 'center', justifyContent:'center' }}>
                                    <Ionicon
                                        name={"md-arrow-dropright"}
                                        color={Colors.primaryColor}
                                        size={25}
                                    />
                                </Right>
                            </ListItem>
                            <ListItem avatar button={true} onPress={() => console.log("Passage......")}>
                                <Left style={{ alignItems: 'center', justifyContent:'center' }}>
                                    <Thumbnail source={require('../assets/images/toto.jpg')} />
                                </Left>
                                <Body>
                                <Text style={{ fontWeight: 'bold' }}>Kumar Pratik</Text>
                                <Text numberOfLines={3} note>{this.message}</Text>
                                </Body>
                                <Right style={{ alignItems: 'center', justifyContent:'center' }}>
                                    <Text note style={{ fontSize : 25 }}> > </Text>
                                </Right>
                            </ListItem>
                            <ListItem avatar button={true} onPress={() => console.log("Passage......")}>
                                <Left style={{ alignItems: 'center', justifyContent:'center' }}>
                                    <Thumbnail source={require('../assets/images/toto.jpg')} />
                                </Left>
                                <Body>
                                <Text style={{ fontWeight: 'bold' }}>Kumar Pratik</Text>
                                <Text numberOfLines={3} note>{this.message}</Text>
                                </Body>
                                <Right style={{ alignItems: 'center', justifyContent:'center' }}>
                                    <Text note>3:43 pm</Text>
                                </Right>
                            </ListItem>
                        </List>
                    </Content>
                </Container>
            </MainContainer>
        )
    }
}

const MainContainer = styled.View`
  flex: 1;
`;