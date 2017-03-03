import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './albumDetails';

// get the data from HTTP request with React here to update the list
// this is functional component
// const AlbumList = () => new Class Component
// used to fetch Data

// question is when to fetch the data -> for this app, soon when app is loaded.
class AlbumList extends Component {
  // Step 1 -> default state of the component
  // By default every component got the this.state
  state = { albums: [] };

  // this is when the component is about to be rendered on the screen
  componentWillMount() {
  axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then( // after getting the data
        // no idea how long it gonna take to get the data
        // response => console.log(response)

        // because the App component already rendered the AlbumList when it is run
        // => have to make the album list rerender again after getting the data
        // we will use 'state'
        // update state using setState
        // state can be used to update the component asynchronously
        response => this.setState({ albums: response.data }) // can not use this.state = {asdfasdf}

      );
    // console.log('componentWillMount in AlbumList');
    // debugger;
  }

  //helper method
  renderAlbums() {
    // need the key for re-rendering and updating the specific component
    // can be anything and should be anything and unique.
    return this.state.albums.map(
      album => <AlbumDetails key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {/*<Text>Album List!!!</Text>*/}
        {
          this.renderAlbums()
        }
      </ScrollView>
    );
  }

}

export default AlbumList;
