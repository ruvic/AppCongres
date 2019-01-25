import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import styled from 'styled-components';
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Ionicon from 'react-native-vector-icons/Ionicons';
import {SearchBar} from 'react-native-elements';

export default class ScheduleHeader extends React.Component{

    _onSearch = (text) =>{

    };

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <TitleContainer>
                    <Ionicon
                        name={"md-menu"}
                        color={Colors.errorText}
                        size={Layout.icon_size+5}
                    />
                    <Title>SCHEDULE</Title>
                </TitleContainer>
                <SearchContainer>
                    <SearchBar
                        lightTheme
                        containerStyle={styles.containerStyle}
                        inputStyle = {styles.inputStyle}
                        leftIconContainerStyle={{ borderWidth:2, borderColor : 'red' }}
                        rightIconContainerStyle = {{ borderWidth:2, borderColor : 'red' }}
                        // clearIcon={{ color: 'red', width : 50, height:50 }}
                        clearIcon={false}
                        searchIcon={false}
                        onChangeText={this._onSearch}
                        placeholder='Search' />
                    <MaskViewTop/>
                    <MaskViewBottom/>
                </SearchContainer>
            </Container>
        )
    }
}

const Container = styled.View`
  background-color: ${Colors.primaryColor};
  height: ${Layout.window.height*0.22}px;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  margin-left: 20px;
  flex: 1;
  margin-top: ${(Platform.OS == 'ios')?20:35}px;
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
        height : 40
    },
    containerStyle : {
        backgroundColor:'transparent',
        padding:0,
        margin : 0,
    },
});
