import React from 'react'
import {StyleSheet} from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

class NotificationIcon extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Icon name={this.props.name}
                      color={this.props.color}
                      size={Layout.icon_size}/>
                <Notification>
                    <NotNumber>0</NotNumber>
                </Notification>
            </Container>
        )
    }

}

const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin: 0px;
  width: 25px;
  height: 25px;
`;

const Notification = styled.View`
  background-color: ${Colors.dangerColor};
  border-radius: 10px;
  width: 15px;
  height: 15px;
  position: absolute;
  top: -3px;
  right: -3px;
  justify-content: center;
  align-items: center;
`;

const NotNumber = styled.Text`
  font-size: 8px;
  font-weight: bold;
  color: white;
`;

const styles = StyleSheet.create({})

export default NotificationIcon

