import React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Ionicon from 'react-native-vector-icons/Ionicons';
import {SearchBar} from 'react-native-elements';
import Modal from 'react-native-modal';

export default class ScheduleHeader extends React.Component{

    onAbout = () => {
        this.setState({
            ModalIsVisible : true,
        });
    };

    _onSearch = (text) =>{

    };
    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={{ color : 'white' }}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
    _showSearchBar = () => {
        if(this.props.searchBar){
            return (
                <SearchContainer>
                    <SearchBar
                        lightTheme
                        containerStyle={styles.containerStyle}
                        inputStyle = {styles.inputStyle}
                        onChangeText={this._onSearch}
                        placeholder={(!this.props.speaker) ? 'Track ...' : 'First name, last name or country ...' } />
                    <MaskViewTop/>
                    <MaskViewBottom/>
                </SearchContainer>
            )
        }else{
            <View/>
        }
    };
    _renderModalContent = () => (
        <View style={styles.modalContent}>
            <Image style={styles.logo} source={require('../assets/images/logo.png')} />
            <Text style={styles.dateAbout}>03 Wed - 05 Fri January 2019!</Text>
            <Text style={styles.dateAbout}>Yaounde , Palais de Sport!</Text>
            <Text style={{textAlign:"center"}}>
                Voici la description du texte concernant levenement, organise par tantantan et sponsorise par
                wafo wambo harrold douglas
            </Text>
            {this._renderButton('Close', () => this.setState({ ModalIsVisible: false}))}
        </View>
    );

    constructor(props){
        super(props);
        this.state = {
            ModalIsVisible : null
        };
    }

    render(){
        return(
            <Container elevation={(this.props.searchBar && !this.props.speaker) ? 0 : 8} searchBar={this.props.searchBar}>
                <TitleContainer>
                    <View style={styles.container}>
                        <Modal isVisible={this.state.ModalIsVisible}>
                            {this._renderModalContent()}
                        </Modal>
                    </View>
                    <IconContainer onPress={this.onAbout}>
                        <Ionicon
                            name={"md-menu"}
                            color={Colors.errorText}
                            size={Layout.icon_size+5}
                        />
                    </IconContainer>
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

const IconContainer = styled.TouchableOpacity`
  
`;

const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-left: 20px;
  font-weight: bold;
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
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
    },
    button: {
        backgroundColor: Colors.primaryColor,
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,

    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    logo:{
        height:150,
        width: 150
    },
    dateAbout:{
        fontWeight:"bold",
        fontSize:20
    }
});
