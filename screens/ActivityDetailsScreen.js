import React from 'react';
import styled from 'styled-components';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Colors from "../constants/Colors";

class ActivityDetailsScreen extends React.Component{

    static navigationOptions = {
        title: 'SYMPOSIUM 8',
        headerStyle: {
            backgroundColor: Colors.tracks.Symposium,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props){
        super(props);
    }

    _renderItem(item){
        return(
            <ItemContainer>
                <Text>
                    The patient with diabetes in surgery
                </Text>
                <Text style={{textTransform:'uppercase', fontSize:16}}>
                    02:30 PM - 02:55 PM
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: '500'}}>
                        Altienno JABANGO
                    </Text>
                    <Text style={{marginLeft:5}}>
                        (KENYA)
                    </Text>
                </View>
            </ItemContainer>
        );
    }

    render(){
        return(
            <Container contentContainerStyle={styles.container}>
                <TitleViewPage>
                    <TitleTextPage>
                        Symposium 8
                    </TitleTextPage>
                </TitleViewPage>
                <HeaderView>
                    <Text>Chairs </Text>
                    <Text style={{fontWeight: 'bold'}}>M. Marre </Text>
                    <Text>(France)</Text>
                </HeaderView>
                <HeaderView>
                    <Text>02:30 PM - 04:00 PM</Text>
                </HeaderView>
                <Details>
                    <RomText>Room 2</RomText>
                    <TitleText>Diabetes and surgical emergencies</TitleText>
                </Details>
                <ContentList>
                    <FlatList
                        data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}, {key: 'h'}, {key: 'i'}]}
                        renderItem={({item}) => this._renderItem(item)}
                    />
                </ContentList>
            </Container>
        )
    }
}

const Container = styled.ScrollView`
  flex : 1;
  margin-top: 5px;
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
  color: #dea600;
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
    border-left-color: #dea600;
    padding: 2px;
`;
const TitleTextPage = styled.Text`    
    text-align:left ;
    font-size: 22px;
    font-weight: 100;
    padding-left: 2%;
    opacity: 1;
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

export default ActivityDetailsScreen;