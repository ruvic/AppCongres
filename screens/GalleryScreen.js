import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

class GalleryScreen extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Text>Gallery Schedule Screen</Text>
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