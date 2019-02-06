import React from 'react';
import styled from 'styled-components';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ViewMoreText from "react-native-view-more-text";
import {Collapse, CollapseBody, CollapseHeader} from "accordion-collapse-react-native";
import Colors from "../constants/Colors";
import {connect} from "react-redux";
import {objectToArray} from "../helpers/helpers";

class SpeakerDetailsScreen extends React.Component{

    static navigationOptions = {
        title: 'Felix ASSAH',
        headerStyle: {
            backgroundColor: Colors.primaryColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    isCollapsed = false;

    constructor(props) {
        super(props);
        this.state = { icons1: "md-arrow-dropdown",  icons2: "md-arrow-dropdown"};
    }

    _showActivityItem = ({item}) => {
        return(
            <View style={{ borderBottomColor : Colors.lineSeparator, borderBottomWidth:1 }}>
                <Text style={{textAlign:"center",color:Colors.tracks.Symposium, fontSize:16}}>{item.name}</Text>
                <Text style={{textAlign:"center"}}>{item.timeStart + ' - '+item.timeEnd}</Text>
                <Text style={{textAlign:"center"}}>{item.date}</Text>
                <Text style={{textAlign:"center"}}>{item.location}</Text>
            </View>
        )
    }

    renderViewMore(onPress){
        return(
            <ViewMoreContainer>
                <Text style={{color:"#009432", fontWeight:'bold'}} onPress={onPress}>Read More</Text>
            </ViewMoreContainer>
        )
    };

    renderViewLess(onPress){
        return(
            <ViewMoreContainer>
                <Text style={{color:"#009432", fontWeight:'bold'}} onPress={onPress}>Read Less</Text>
            </ViewMoreContainer>
        )
    };

    changeIconOra(){
        this.isCollapsed = !this.isCollapsed;
    }

    _speakersSessions(item){
        var scheduleList = objectToArray(this.props.data.schedule);
        var result ={
            moderateurs: [],
            orateurs : [],
        };
        scheduleList.forEach((schedule) => {
            objectToArray(schedule.groups).forEach((group) => {
                objectToArray(group.sessions).forEach((session) => {


                    if(session.chairsNames && objectToArray(session.chairsNames).indexOf(item.id+'')>=0){
                        session["date"] = schedule.date;
                        result.moderateurs.push(session);
                    }

                    if(session.programme){
                        objectToArray(session.programme).forEach((programme) => {
                            if(objectToArray(programme.speakerNames).indexOf(item.id+'')>=0){
                                session["date"] = schedule.date;
                                result.orateurs.push(session);
                            }
                        });
                    }

                });
            });
        });
        return result;
    }

    render(){
        const item = this.props.navigation.state.params.item;
        const speakersSession = this._speakersSessions(item);
        return(
            <Container contentContainerStyle={styles.container}>
                <ProfilInfos>
                    <Image source={require('../assets/images/profil.png')} style={styles.profilImage}/>
                    <Text style={styles.nameProfil}>
                        {item.name}
                    </Text>
                    <Text style={styles.countryProfil}>
                        {item.country}
                    </Text>
                    <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                        <Titre>{"Poste de travail Manquant"}</Titre>
                    </View>
                </ProfilInfos>
                <View style={{padding: 5}}>
                    <ViewMoreText
                        numberOfLines={3}
                        renderViewMore={this.renderViewMore}
                        renderViewLess={this.renderViewLess}
                        textStyle={{textAlign: 'justify', padding:15, paddingBottom:0}}>
                        <Text style={{ textAlign : 'center' }} >
                            {item.about}
                        </Text>
                    </ViewMoreText>
                </View>
                <Collapse onToggle={()=>this.changeIconOra()}>
                    <CollapseHeader>
                        <HeadAccordion>
                            <Text style={{textAlign:"center", color:"white", fontSize:16}}>Speech session
                                <Icon style={{fontSize:16}} name={this.state.icons1} color="white" />
                            </Text>
                        </HeadAccordion>
                    </CollapseHeader>
                    <CollapseBody style={{textAlign:"Center",padding:5}}>
                        {
                            (objectToArray(speakersSession.moderateurs).length > 0)?
                                <FlatList
                                    data={objectToArray(speakersSession.moderateurs)}
                                    keyExtractor={(item, index) => item.id+""+(String(item.location).split(' ')[1])}
                                    renderItem={this._showActivityItem}
                                />
                            : <View/>
                        }
                    </CollapseBody>
                </Collapse>
                <Collapse style={{marginTop:10}} >
                    <CollapseHeader>
                        <HeadAccordion style={{paddingLeft:15, paddingRight:15}}>
                            <Text style={{textAlign:"center" , marginRight: 10 ,color:"white", fontSize:16,}}>Moderating session
                            <Icon style={{fontSize:16,paddingLeft:3}} name={this.state.icons2} color="white" /></Text>
                        </HeadAccordion>
                    </CollapseHeader>
                    <CollapseBody style={{textAlign:"Center",padding:5}}>
                        {
                            (objectToArray(speakersSession.orateurs).length > 0)?
                                <FlatList
                                    data={objectToArray(speakersSession.orateurs)}
                                    keyExtractor={(item, index) => item.id+""+(String(item.location).split(' ')[1])}
                                    renderItem={this._showActivityItem}
                                />
                                : <View/>
                        }
                    </CollapseBody>
                </Collapse>
            </Container>
        )
    };

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    profilImage: {
        width:150,
        height:150,
        borderRadius:500,
        borderColor:'black'
    },
    nameProfil: {
        fontSize: 25,
        paddingTop:20
    },
    countryProfil: {
        fontSize: 18,
        color: 'green'
    }
});

const Container = styled.ScrollView`
  flex : 1;
`;

const ViewMoreContainer = styled.View`
  height: 20px;
  width: 100%;
  padding-right: 20px;
  align-items: flex-end;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const ProfilInfos = styled.View`
  align-items: center;
  padding-top: 50px;
`;

const HeadAccordion = styled.View`
    background-color:#009432;
    color:#009432;
    padding:3px;
    padding-left:30px;
    padding-right:30px;
    width:100%;
`;

const Titre = styled.Text`
  font-weight: bold;
`;

const mapStateToProps = (state) => {
    return {
        data: state.updateAppData.data
    }
};

export default connect(mapStateToProps)(SpeakerDetailsScreen);