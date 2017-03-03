import React from 'react';
import { Text, TouchableOpacity} from 'react-native';

const Button = ({ onPress, children }) => {

  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
    >
      <Text style={textStyle}>
        {children}
        </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch', // for the self <> alignItems is for the child
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 8,
    marginRight: 8
  },
  textStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#007aff',
    fontWeight: '600',
    paddingTop: 8,
    paddingBottom: 8
  }
};

export default Button;
