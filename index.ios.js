// index.ios.js - place code in here for ios

// Import a library to help create a component //ES6
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

// Create a component // tiny API -> no complexity
const App = () =>  // App component for the device
    //dialect of javascript -> JSX -> same syntax of HTML
    //=> Mask over some series of code
    // input the header inside of the App component
     (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );

// Render it to the device
// have to register at least one component to the device
// -> render an application named 'albums' and
// pass the function that return the first component to the application
AppRegistry.registerComponent('albums', () => App);
