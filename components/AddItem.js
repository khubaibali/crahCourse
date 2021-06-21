import React,{useState} from 'react'
import {View,TextInput ,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
const AddItem = ({onAddItem}) => {
    const [text ,setText] = useState('')
    return (
       
            <View style={styles.listItemView}>
           <TextInput 
           placeholder='Add items...' 
           style={styles.input}
           onChangeText={(e)=>{setText(e)}}
           />

           <TouchableOpacity style={styles.btn} onPress={()=>{onAddItem(text)}}>
                <Text style={styles.btnText}>
                    <Icon name='plus' size={20}/>Add Item
                </Text>
           </TouchableOpacity>
            </View>
      
    )

    
}

const styles =StyleSheet.create({
  input:{
      height:60,
      padding:8,
      fontSize:16
  },
  btn:{
      padding:9,
    backgroundColor:'#c2bad8',
    margin:5
  },
  btnText:{
      fontSize:18,
      color:'darkslateblue',
      textAlign:'center'

  }

})



export default AddItem
