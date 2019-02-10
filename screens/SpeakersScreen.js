import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {Container, Content} from 'native-base';
import {connect} from "react-redux";
import {objectToArray} from "../helpers/helpers";
import Colors from "../constants/Colors";
import SpeakerItem from "../components/SpeakerItem";
import Header from "../components/Header";

class SpeakersScreen extends React.Component{

    static navigationOptions = {
        header : <Header speaker searchBar title="SPEAKERS" screen="speakers" />,
    };

    constructor(props){
        super(props);
        this.state = {
          FilterData : null
        };
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
            let speakersList = (this.props.speakerFilter) ? this.props.speakerFilter : this.props.data.speakers;
            return(
                <Container>
                    <Content>
                        <FlatList
                            data={objectToArray(speakersList)}
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
        data: state.updateAppData.data,
        speakerFilter : state.updateFilterData.speakersFilter,
    }
};

export default connect(mapStateToProps)(SpeakersScreen);