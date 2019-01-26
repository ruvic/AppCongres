import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import styled from 'styled-components';
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Ionicon from 'react-native-vector-icons/Ionicons';
import {SearchBar} from 'react-native-elements';

export default class ScheduleHeader extends React.Component{

    _onSearch = (text) =>{
        //this.props.search(text);
    };

    constructor(props){
        super(props);
    }

    _showSearchBar = () => {
        if(this.props.searchBar){
            return (
                <SearchContainer>
                    <SearchBar
                        lightTheme
                        containerStyle={styles.containerStyle}
                        inputStyle = {styles.inputStyle}
                        onChangeText={this._onSearch}
                        placeholder={(!this.props.speaker) ? 'Tracks ...' : 'First name, last name or country ...' } />
                    <MaskViewTop/>
                    <MaskViewBottom/>
                </SearchContainer>
            )
        }else{
            <View/>
        }
    };

    render(){
        return(
            <Container elevation={(this.props.searchBar && !this.props.speaker) ? 0 : 8} searchBar={this.props.searchBar}>
                <TitleContainer>
                    <Ionicon
                        name={this.props.icon}
                        color={Colors.errorText}
                        size={Layout.icon_size+5}
                    />
                    <Title>{this.props.title}</Title>
                </TitleContainer>
                {this._showSearchBar()}
            </Container>
        )
    }
}

const Container = styled.View`
  background-color: ${Colors.primaryColor};
  height: ${(props) => (props.searchBar) ? Layout.window.height*0.22 : 85}px;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  margin-left: 20px;
  flex: 1;
  margin-top: ${(Platform.OS == 'ios')?20:33}px;
  margin-bottom: 2px;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-left: 20px;
  font-weight: 400;
`;
const SearchContainer = styled.View`
  padding-top: 2px;
  margin-bottom: 0px;
`;

const MaskView = styled.View`
  flex: 1;
  height: 5px;
  width: 100%;
  background-color: ${Colors.primaryColor};
  position: absolute;
`;

const MaskViewTop = styled(MaskView)`
  top : 0px;
`;

const MaskViewBottom = styled(MaskView)`
  bottom : 0px;
`;

const styles = StyleSheet.create({
    inputStyle : {
        backgroundColor : 'white',
        paddingLeft: 35,
    },
    containerStyle : {
        backgroundColor:'transparent',
        padding:0,
        margin : 0,
    },
});
