import React from 'react';
import styled from 'styled-components';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Colors from "../constants/Colors";
import Divider from "react-native-elements/src/divider/Divider";
import {Text} from "react-native";
import {objectToArray} from "../helpers/helpers";
import {connect} from "react-redux";
import {store} from "../storage/Storage";

class ActivityItem extends React.Component{

    _theme = (tracks) => {
        switch (tracks){
            case 'Food':
                return {
                    color : Colors.tracks.Food,
                    icon : 'md-cafe',
                };
                break;
            case 'CME':
                return {
                    color : Colors.tracks.CME,
                    icon : 'md-bookmark',
                };
                break;
            case 'Symposium':
                return {
                    color : Colors.tracks.Symposium,
                    icon : 'md-medal',
                };
                break;
            case 'Abstracts':
                return {
                    color : Colors.tracks.Abstracts,
                    icon : 'md-school',
                };
                break;
            default :
                return {
                    color : Colors.tracks.CME,
                    icon : 'md-star',
                };
                break;
        }
    };

    _onFavorite = () => {

        this.setState({
           starIcon : (this.state.isFavorite) ? 'md-star-outline' : 'md-star',
           isFavorite : !this.state.isFavorite,
        });

        /**
         * Ajouter un attribut isFavorite à true à chaque groupe concerné et
         * On fait pareil pour la session concernée
         */

        var data = this.props.data;
        var temp = data.schedule[this.props.indexDay].groups[this.props.indexGroup].sessions[this.props.indexSession].isFavorite
        data.schedule[this.props.indexDay].groups[this.props.indexGroup].sessions[this.props.indexSession].isFavorite = !temp;
        // if(!data.schedule[this.props.indexDay].groups[this.props.indexGroup].favoriteSessionsId){
        //     data.schedule[this.props.indexDay].groups[this.props.indexGroup].favoriteSessionsId = [];
        // }


        //store it persistently
        store("data", data);

        this.props.dispatch({
           type : 'UPDATE_APP_DATA',
           value : data
        });

    };

    constructor(props){
        super(props);
        this.state = {
            starIcon : (!this.props.item.isFavorite) ? 'md-star-outline' : 'md-star',
            isFavorite : this.props.item.isFavorite,
        }
    }

    render(){
        const theme = this._theme(this.props.tracks);
        const color = theme.color;
        const icon = theme.icon;
        const {item} = this.props;
        return(
            <Container>
                {
                    (!this.props.isFavorite) ?
                        <StarContainer onPress={this._onFavorite}>
                            <Ionicon
                                name={this.state.starIcon}
                                color={'black'}
                                size={24}
                            />
                        </StarContainer>
                    : null
                }
                <ContentContainer onPress={() => this.props.onPress(this.props.item)} >
                    <VerticalBar color={color} />
                    <Content>
                        <TitleContainer color={color}>
                            <Ionicon
                                name={icon}
                                color={color}
                                size={16}
                            />
                            <Title color={color}>{item.name}</Title>
                        </TitleContainer>
                        <TimePeriod>{item.timeStart+' - '+item.timeEnd}</TimePeriod>
                        <Localisation>{item.location}</Localisation>
                        {
                            <ChairInfo style={{ flexWrap: 'wrap' }} >Chairs :
                                {
                                    (item.chairsNames) ?
                                        objectToArray(item.chairsNames).map((chair) => {
                                            return(
                                                <Text style={{ flexDirection:'row'}}>
                                                    <ChairName>{' '+this.props.data.speakers[chair].name}</ChairName>
                                                    <ChairInfo>{' ('+this.props.data.speakers[chair].country+')'}</ChairInfo>
                                                </Text>
                                            )
                                        })
                                    : <Text></Text>
                                }
                            </ChairInfo>
                        }
                    </Content>
                    <RightContainer>
                        <Ionicon
                            name={"ios-arrow-forward"}
                            color={'grey'}
                            size={21}
                        />
                    </RightContainer>
                </ContentContainer>
                <Divider style={{ height : 1, backgroundColor: '#cacfca' }} />
            </Container>
        )
    }
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  flex-direction: row;
`;

const ContentContainer = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 10px;
`;

const VerticalBar = styled.View`
  width: 3px;
  height: 100%;
  background-color: ${
    (props) => props.color
  };
  margin-right: 10px;
  
`;

const StarContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`;

const Content = styled.View`
  width: 80%;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RightContainer = styled.View`
  width: 15%;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: ${(props) => props.color};
  font-size: 14px;
  margin-left: 5px;
`;

const Label = styled.Text`
  font-size: 12px;
`;

const TimePeriod = styled(Label)`
  
`;

const Localisation = styled(Label)`
  
`;

const ChairInfo = styled(Label)`
  color: grey;
`;

const ChairName = styled(ChairInfo)`
  font-weight: bold;
`;

const mapStateToProps = (state) => {
    return {
        data : state.updateAppData.data,
    }
};

export default connect(mapStateToProps)(ActivityItem);