import React from 'react'
import {View ,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
const ListItems = ({items,onDelete,index}) => {
    return (
        <TouchableOpacity style={styles.listItem} >
            <View style={styles.listItemView}>
            <Text style={styles.listItemText} >{items.text}</Text>
            <Icon onPress={()=>{onDelete(index)}} name='remove' size={20} color='firebrick'/>
            </View>
        </TouchableOpacity>
    )

    
}

const styles =StyleSheet.create({
  listItem:{
      padding:15,
      backgroundColor: '#f8f8f8',
      borderBottomWidth:1
  },
  listItemView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  listItemText:{
      fontSize:18,

  }

})



export default ListItems
