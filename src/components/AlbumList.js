import React,{Component} from 'react';
import {View,Text,ScrollView} from 'react-native';
import AlbumDetails from './AlbumDetails';

export default class AlbumList extends Component{
  state ={
    albums:[]
  };

  componentWillMount(){
    console.log('componentwillMOunt called');
    fetch('https://rallycoding.herokuapp.com/api/music_albums').then(response =>response.json())
      .then(data =>{
        this.setState({
          albums:data
        })
      }).catch(console.error);
  }
renderAlbums(){
  return this.state.albums.map(album =>
    <AlbumDetails key={album.title} album={album} />
  );
}
  render(){
    console.log(this.state.albums)
      return(
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
      );
    };
}
