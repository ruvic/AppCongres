import React from 'react';
import styled from 'styled-components';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Colors from "../constants/Colors";
import Divider from "react-native-elements/src/divider/Divider";

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
    }

    constructor(props){
        super(props);
        this.state = {
            starIcon : 'md-star-outline',
            isFavorite : false,
        }
    }

    render(){
        const theme = this._theme(this.props.tracks);
        const color = theme.color;
        const icon = theme.icon;
        return(
            <Container>
                <ContentContainer onPress={() => this.props.onPress(this.props.item)} >
                    <VerticalBar color={color} />
                    <Content>
                        <TitleContainer color={color}>
                            <Ionicon
                                name={icon}
                                color={color}
                                size={16}
                            />
                            <Title color={color} >Symposium 8</Title>
                        </TitleContainer>
                        <TimePeriod>02:30 PM - 04:00 PM</TimePeriod>
                        <Localisation>Room 2</Localisation>
                        <ChairInfo style={{ flexWrap: 'wrap' }} >Chairs :
                            <ChairName> M. MARRE</ChairName>
                            <ChairInfo> (FRANCE) </ChairInfo>
                            <ChairName>Charles ROTIMI</ChairName>
                            <ChairInfo> (USA) </ChairInfo>
                        </ChairInfo>
                    </Content>
                    <RightContainer>
                        <Ionicon
                            name={"ios-arrow-forward"}
                            color={'grey'}
                            size={21}
                        />
                        <StarContainer onPress={this._onFavorite}>
                            <Ionicon
                                name={this.state.starIcon}
                                color={color}
                                size={24}
                            />
                        </StarContainer>
                    </RightContainer>
                </ContentContainer>
                <Divider style={{ height : 1, backgroundColor: '#cacfca' }} />
            </Container>
        )
    }
}

const Container = styled.View`
  margin-top: 10px;
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
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 0px;
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

export default ActivityItem;