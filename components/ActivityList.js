import React from 'react';
import styled from 'styled-components';
import {Text, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";

class ActivityList extends React.Component{

    constructor(props){
        super(props);
    }

    _onclick = () => {
        console.log(this.props);
        // if(this.props.scheduleNavigation.schedule){
        //     this.props.scheduleNavigation.navigation.navigate("ActivityDetails");
        // }else{
        //     this.props.scheduleNavigation.navigation.navigate("FavoriteActivityDetails");
        // }
    };

    render(){
        return(
            <Container>
                <TouchableOpacity style={{ width : 100, height : 50 }} onPress={this._onclick}>
                    <Text>Cliquer ici</Text>
                </TouchableOpacity>
                <Text>Liste des activités</Text>
            </Container>
        )
    }
}

const Container = styled.View`
  flex : 1;
  justify-content: center;
  align-items: center;
`;

const mapStateToProps = (state) => {
    return {
        scheduleNavigation : state.updateGlobalData.scheduleNavigation
    }
};

export default connect(mapStateToProps)(ActivityList);