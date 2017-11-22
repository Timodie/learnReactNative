import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class AlbumList extends Component{

  componentWillMount(){
    console.log('componentwillMOunt called');
    // fetch('https://rallycoding.herokuapp.com/api/music_albums').then(function(response){
    //   console.log(response);
    // }).catch(function(error){
    //   console.error(error);
    // })
  }

  render(){
      return(
        <View>
          <Text> Album List Native</Text>
        </View>
      );
    };
}
