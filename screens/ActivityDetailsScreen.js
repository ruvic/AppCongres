import React from 'react';
import styled from 'styled-components';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Colors from "../constants/Colors";
import {connect} from "react-redux";
import {objectToArray} from "../helpers/helpers";

class ActivityDetailsScreen extends React.Component{

    static navigationOptions = ({navigation}) => {
        const { params = {} } = navigation.state;
        return {
            title: params.sessionItem.name,
            headerStyle: {
                backgroundColor: Colors.tracks[params.sessionItem.tracks[0]],
                color : 'white',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color : 'white',
            },
        };
    };

    constructor(props){
        super(props);
        this.sessionItem = this.props.navigation.state.params.sessionItem;
    }

    _getSpeakerProp(id, att){
        var result = null
        objectToArray(this.props.data.speakers).forEach((speaker) => {
            if(speaker.id === id){
                result = speaker;
            }
        });
        if(result) {
            return result[att];
        }else{
            return ' ';
        }
    }

    _renderItem(item){
        return(
            <ItemContainer>
                <Text>
                    {item.description}
                </Text>
                <Text style={{textTransform:'uppercase', fontSize:16}}>
                    {item.timeStart+' - '+item.timeEnd}
                </Text>
                <Text style={{flexDirection: 'row', flexWrap:'wrap'}}>
                    <Text style={{fontWeight: '500'}}>
                        {this._getSpeakerProp(item.speakerNames[0], "name")}
                    </Text>
                    <Text style={{marginLeft:5}}>
                        {'('+this.props.data.speakers[item.speakerNames[0]].country+')'}
                    </Text>
                </Text>
            </ItemContainer>
        );
    }

    render(){
        return(
            <Container contentContainerStyle={styles.container}>
                <TitleViewPage tracks={Colors.tracks[this.sessionItem.tracks[0]]}>
                    <TitleTextPage>
                        {(this.sessionItem.topic)?this.sessionItem.topic:''}
                    </TitleTextPage>
                </TitleViewPage>
                <HeaderView>
                    <Text style={{flexWrap:'wrap', flexDirection:'row' }}>Chairs :
                        {
                            (this.sessionItem.chairsNames) ?
                                objectToArray(this.sessionItem.chairsNames).map((chair) => {
                                    return(
                                        <Text>
                                            <Text style={{fontWeight: 'bold'}}>{this.props.data.speakers[chair].name+' '}</Text>
                                            <Text>{'('+this.props.data.speakers[chair].country+')'}</Text>
                                        </Text>
                                    )
                                })
                            : <Text/>
                        }
                    </Text>
                </HeaderView>
                <HeaderView>
                    <Text>{this.sessionItem.timeStart+' - '+this.sessionItem.timeEnd}</Text>
                </HeaderView>
                <Details>
                    <RomText tracks={Colors.tracks[this.sessionItem.tracks[0]]}>{this.sessionItem.location}</RomText>
                    <TitleText>{this.sessionItem.description}</TitleText>
                </Details>
                <ContentList>
                    {
                        (this.sessionItem.programme)?
                            <FlatList
                                data={objectToArray(this.sessionItem.programme)}
                                keyExtractor={(item, index) => ''+item.id}
                                renderItem={({item}) => this._renderItem(item)}
                            />
                        : <View/>
                    }
                </ContentList>
            </Container>
        )
    }
}

const Container = styled.ScrollView`
  flex : 1;
  margin-top: 5px;
  background: #fff;
`;

const HeaderView = styled.View`
  flex-direction: row;
  width: 320px;
  margin-top: 8px;
`;

const Details = styled.View`
  width: 320px;
  margin-top: 8px;
`;

const RomText=styled.Text`
  color: ${ props => props.tracks};
  font-size: 16px;
`;

const TitleText = styled.Text`
  margin-top: 8px;
`;

const ContentList = styled.View`
  padding-left: 15px;
  width: 320px;
`;

const ItemContainer = styled.View`
  padding-top: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #cacfca;
  padding-bottom: 15px;
`;

const TitleViewPage = styled.View`
    margin-top:5px;
    width: 90%;
    border-left-width: 4px;
    border-left-color: ${ props => props.tracks};
    padding: 2px;
`;
const TitleTextPage = styled.Text`    
    text-align:left ;
    font-size: 22px;
    padding-left: 2%;
    opacity: 1;
    flex-wrap: wrap;
`;

const DetailHeader = styled.View`
    height: 50px;
    background-color: #dea600;
    box-shadow: 5px 10px #1e1e1e;
    width: 380px;
    
`;

const DetailHeaderContent = styled.Text`
    color: white;
    font-size: 25px;
    font-weight: bold;

`;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
const mapStateToProps = (state) => {
    return {
        scheduleNavigation : state.updateGlobalData.scheduleNavigation,
        data : state.updateAppData.data,
    }
};

export default connect(mapStateToProps)(ActivityDetailsScreen);