// file for header of the albums application
// import library for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make the component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>

  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', // for the content inside of the view to be move vetically
    alignItems: 'center', // for the content inside of the view to be move horizontally
    height: 60,
    paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0, height: 2
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
// export statement is for the other components can use this
export default Header;
