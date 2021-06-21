import React from 'react'
import {View ,Text,Image,StyleSheet} from 'react-native'
const Header = () => {
    return (
        <View style={textStyle.header} >
            <Text style={textStyle.text} >Shoping List</Text>
        </View>
    )

    
}

const textStyle =StyleSheet.create({
    header : {
      height:60,
      padding:15,
      backgroundColor:'darkslateblue'
    },
    text:{
        fontSize:23,
        textAlign:'center',
        color:'#fff'
    }
 })



export default Header
