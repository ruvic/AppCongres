import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import Header from "../components/Header";

class GalleryScreen extends React.Component{

    static navigationOptions = {
        header : <Header title="GALLERY" icon="md-images"/>,
    };

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Text>Gallery Screen</Text>
            </Container>
        )
    }
}

const Container = styled.View`
  flex : 1;
  align-items: center;
  justify-content: center;
`;

export default GalleryScreen ;