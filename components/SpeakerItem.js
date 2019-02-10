import React from 'react';
import {StyleSheet} from 'react-native';
import {Body, Left, ListItem, Right, Text, Thumbnail} from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {imageGet} from "../Firebase";

class SpeakerItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            imageSource : require("../assets/images/profile.jpg")
        };
    }

    componentDidMount(){
        imageGet(this.props.item.profilePic, this);
    }

    render(){
        const {item} = this.props;
        return(
            <ListItem avatar key={item.id+''} onPress={() => this.props.onPress(item)}>
                <Left style={styles.left}>
                    <Thumbnail source={this.state.imageSource} />
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


export default SpeakerItem;