import React from 'react';
import {Text,StyleSheet,View } from 'react-native';
/*
  Functional component cannot fetch data
  easy to write
*/
const Header = (props) =>{
    return(
      <View style = {styles.viewStyle}>
        <Text style ={styles.textStyle}>{props.headerText}</Text>

      </View>
      );
};
 const styles = StyleSheet.create({
  viewStyle:{
    backgroundColor:'#F8F8F8',
    justifyContent:'center',
    alignItems:'center',
    height:60,
    paddingTop:30,
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.9,
    elevation:3,
    position:'relative'
  },
  textStyle:{
    fontSize:30
    },
});
export default Header;
