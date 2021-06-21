import React,{useState} from 'react'
import {View ,Text,Image,StyleSheet,FlatList} from 'react-native'
import Header from './components/Header'
import { uuid } from 'uuidv4';
import ListItems from './components/ListItems';
import AddItem from './components/AddItem';
const App =()=>{
  const [items ,setItem] = useState([
    {id:1,text:'Milk'},
    {id:2,text:'Butter'},
    {id:3,text:'Bread'},
    {id:4,text:'Eggs'},
  ])

  const onDelete=(index)=>{
  items.splice(index,1)
   setItem([...items])
  } 
  const onAddItem=(text)=>{
    items.push({id:5,text})
    setItem([...items])
  }
  return(
    <View style={viewStyle.container}>
     <Header/>
     <AddItem onAddItem={onAddItem}/>
      {/* <Image source={{uri:'https://randomuser.me/api/portraits/men/1.jpg'}} style={viewStyle.img} /> */}
    <FlatList data={items} renderItem={({item,index})=> <ListItems onDelete={onDelete} items={item} index={index}/>}/>
    </View>
  )
}
const viewStyle = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop:60
    // justifyContent:'center', 
    // alignItems:'center'
  },
  img:{
    width:100,
    height:100,
    borderRadius: 100 / 2
  }
})

const textStyle =StyleSheet.create({
heading : {
  fontSize: 30,
  color:'darkslateblue'
}


})
export default App;