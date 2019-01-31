import React from 'react';
import styled from 'styled-components';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ViewMoreText from "react-native-view-more-text";
import {Collapse, CollapseBody, CollapseHeader} from "accordion-collapse-react-native";
import Colors from "../constants/Colors";

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

    _showActivityItem(item){
        return(
            <View style={{ borderBottomColor : Colors.lineSeparator, borderBottomWidth:1 }}>
                <Text style={{textAlign:"center",color:Colors.tracks.Symposium, fontSize:16}}>Sympositum 8</Text>
                <Text style={{textAlign:"center"}}>02:30PM - 04:00PM</Text>
                <Text style={{textAlign:"center"}}>wed 03</Text>
                <Text style={{textAlign:"center"}}>Room 2</Text>
            </View>
        )
    }

    render(){
        return(
            <Container contentContainerStyle={styles.container}>
                <ProfilInfos>
                    <Image source={require('../assets/images/profil.png')} style={styles.profilImage}/>
                    <Text style={styles.nameProfil}>
                        Felix ASSAH
                    </Text>
                    <Text style={styles.countryProfil}>
                        CAMEROUN
                    </Text>
                    <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                        <Text>
                        <Icon
                            style={{fontSize:16, marginTop:2}}
                            name={"ios-mail"}
                            color="green"/> elle@exemple.com</Text>
                    </View>
                </ProfilInfos>
                <View style={{padding: 5}}>
                    <ViewMoreText
                        numberOfLines={3}
                        renderViewMore={this.renderViewMore}
                        renderViewLess={this.renderViewLess}
                        textStyle={{textAlign: 'justify', padding:15, paddingBottom:0}}>
                        <Text style={{ textAlign : 'center' }} >
                            klflkqsdf fjqslf mfsqlkfj qdmf fjdklsfm jlsfdsfjl flsfjslfk jfsflsjfks fqflksjf
                            klflkqsdf fjqslf mfsqlkfj qdmf fjdklsfm jlsfdsfjl flsfjslfk jfsflsjfks fqflksjf
                            read more... mlsjfs fsdfus fsdjf sdfjf sdfjf sdfs fsjf dsfjfs fsdfjfs dfsdjfs dfsdjfsma
                            125 fd5fd f 8fs8fds 8df 8sdffs/fds8f dsf/ fsdfds/f d8s/aa/ // /fdfdf8 8fd8fd8s56  66f6df
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
                        {this._showActivityItem(null)}
                        {this._showActivityItem(null)}
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
                        {this._showActivityItem(null)}
                        {this._showActivityItem(null)}
                    </CollapseBody>
                </Collapse>
            </Container>
        )
    };

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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

export default SpeakerDetailsScreen;