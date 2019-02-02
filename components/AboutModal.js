import React, {Component} from "react";
import {StyleSheet} from "react-native";
import Modal from "react-native-modal";
import styled from 'styled-components';
import Colors from "../constants/Colors";
import AboutContent from "./AboutContent";

class AboutModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            clickState : false
        };
    }

    render() {
        return (
            <Modal
                transparent={true}
                isVisible={this.props.isVisible}
                onBackButtonPress = {this.props.onClose}
                style = {{ flex:1, marginTop: 10, marginBottom:20 }}>
                <ModalContent>
                    <Title>
                        ABOUT
                    </Title>
                    <BodyContainer>
                        <AboutContent/>
                    </BodyContainer>
                    <ButtonContainer>
                        <ValidButton onPress={this.props.onClose}>
                            <ButtonLabel>CLOSE</ButtonLabel>
                        </ValidButton>
                    </ButtonContainer>
                </ModalContent>
            </Modal>
        );
    }
}


const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  top: 20px;
  text-align: center;
  margin-bottom: 35px;
`;

const ModalContent = styled.View`
  background-color: white;
  border-radius: 10px;
  flex: 1;
`;


const BodyContainer = styled.ScrollView`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const ValidButton = styled.TouchableOpacity`
  height: 35px;
  background-color: ${Colors.primaryColor};
  border-width: 2px;
  border-color: ${Colors.primaryColor};
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const ButtonLabel = styled.Text`
  color: white;
  font-size: 14px;
`;

const styles = StyleSheet.create({

});

export default AboutModal;