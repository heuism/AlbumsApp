import React from 'react';
import { View } from 'react-native';

//doesnt need to have life cycle event
const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 8,
    backgroundColor: '#fff',
    // for the layout for the content
    justifyContent: 'flex-start',
    flexDirection: 'row', // change the direction of the content to horizontal direction
    borderColor: '#ddd',
    position: 'relative',
  }
};

export default CardSection;
