// import React, {Component} from "react";
// import {StyleSheet} from "react-native";
// import Modal from "react-native-modal";
// import styled from 'styled-components';
// import Colors from "../constants/Colors";
// import AboutContent from "./AboutContent";
//
// class AboutModal extends Component {
//
//     constructor(props){
//         super(props);
//         this.state = {
//             clickState : false
//         };
//     }
//
//     _renderButton = (text, onPress) => (
//         <TouchableOpacity onPress={onPress}>
//             <View style={styles.button}>
//                 <Text>{text}</Text>
//             </View>
//         </TouchableOpacity>
//     );
//
//     _renderModalContent = () => (
//         <View style={styles.modalContent}>
//             <Image style={styles.logo} source={require('./logo.png')} />
//             <Text style={styles.dateAbout}>03 Wed - 05 Fri January 2019!</Text>
//             <Text style={styles.dateAbout}>Yaounde , Palais de Sport!</Text>
//             <Text style={{textAlign:"center"}}>
//                 Voici la description du texte concernant levenement, organise par tantantan et sponsorise par
//                 wafo wambo harrold douglas
//             </Text>
//             {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
//         </View>
//     );
//
//     render() {
//         return (
//             <Modal
//                 transparent={true}
//                 isVisible={this.props.isVisible}
//                 onBackButtonPress = {this.props.onClose}
//                 style = {{ flex:1, marginTop: 10, marginBottom:20 }}>
//                 <ModalContent>
//                     {this._renderModalContent()}
//                 </ModalContent>
//             </Modal>
//         );
//     }
// }
//
//
// const Title = styled.Text`
//   font-weight: bold;
//   font-size: 18px;
//   top: 20px;
//   text-align: center;
//   margin-bottom: 35px;
// `;
//
// const ModalContent = styled.View`
//   background-color: white;
//   border-radius: 10px;
//   flex: 1;
// `;
//
//
// const BodyContainer = styled.ScrollView`
//   align-items: center;
//   justify-content: center;
//   margin-top: 10px;
//   margin-bottom: 10px;
// `;
//
// const ButtonContainer = styled.View`
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 10px;
// `;
//
// const ValidButton = styled.TouchableOpacity`
//   height: 35px;
//   background-color: ${Colors.primaryColor};
//   border-width: 2px;
//   border-color: ${Colors.primaryColor};
//   padding-left: 10px;
//   padding-right: 10px;
//   border-radius: 5px;
//   align-items: center;
//   justify-content: center;
// `;
//
// const ButtonLabel = styled.Text`
//   color: white;
//   font-size: 14px;
// `;
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     button: {
//         backgroundColor: 'lightblue',
//         padding: 12,
//         margin: 16,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 4,
//         borderColor: 'rgba(0, 0, 0, 0.1)',
//     },
//     modalContent: {
//         backgroundColor: 'white',
//         padding: 22,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 4,
//         borderColor: 'rgba(0, 0, 0, 0.1)',
//     },
//     bottomModal: {
//         justifyContent: 'flex-end',
//         margin: 0,
//     },
//     logo:{
//         height:150,
//         width: 150
//     },
//     dateAbout:{
//         fontWeight:"bold",
//         fontSize:20
//     }
// });
//
// export default AboutModal;