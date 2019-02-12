import React from 'react';
import styled from 'styled-components';

import Colors from '../constants/Colors';
import {connect} from "react-redux";
import {formatDate} from "../helpers/helpers";

class TabBarLabel extends React.Component {

  render() {
      const color=this.props.focused ? '#fff' : Colors.tabIconDefault;
      var title = '';
      if(!this.props.data){
          if(this.props.index === 0){
              title = 'FIRST';
          }else if (this.props.index === 1){
            title = 'SECOND';
          }else{
            title = 'THIRD';
          }
      }else{
          let date = this.props.data.schedule[this.props.index].date;
          let fDate =formatDate(date);
          title = fDate.weekDay + ' ' + fDate.day;
      }
      return (
        <Container>
            {
                (this.props.focused) ?
                    <Title style={{ fontWeight: 'bold' }}>{title}</Title>
                : <Title focused={this.props.focused}>{title}</Title>
            }

        </Container>
      );
  }
}

const Container = styled.View`
  flex : 1;
`;

const Title = styled.Text`
  color: #fff;
`;

const mapStateToProps = (state) => {
    return {
        data : state.updateAppData.data,
    }
};

export default connect(mapStateToProps)(TabBarLabel);

