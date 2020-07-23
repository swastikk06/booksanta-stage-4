import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class BookDonateScreen extends Component{
  constructor(){
    super();
  this.state={
    requestedBooksList:[]
  }
this.requestRef=null
}
getRequestedBooksList=()=>{
  this.requestRef=db.collection("requested_books")
  .onSnapshot((snapshot)=>{
var requestedBooksList=snapshot.docs.map(document=>document.data())
this.setState({
  requestedBooksList:requestedBooksList
})    
  })
}
componentDidMount(){
  this.getRequestedBooksList()
}
componentWillUnmount(){
  this.requestRef();
}
keyExtractor=(item,index)=>index.toString()
renderItem=({item,i})=>{
  return(
  <ListItem key={i} title={item.book_name} subTitle={item.resone_to_request} titleStyle={{color:'black',fontWeight:'bold'}} 
  rightElement={<TouchableOpacity style={{width:100,height:30,justifyContent:'center',alignItems:'center',backgroundColor:"#ff5722",shadowColor:"#000",shadowOffset:{width:0,height:8}}} >
    <Text style={{color:'#ffff'}}>
      view
    </Text>
  </TouchableOpacity>}
  buttomDivider>

  </ListItem>)
}
  render(){
    return(
<View style={{flex:1}}>
<MyHeader title="Donate Books">
  
</MyHeader>
<View style={{flex:1}}>
{
  this.state.requestedBooksList.length===0?(
    <View style={styles.subcontainer}>
      <Text style={{fontSize:20}}>
list of all requested_books
      </Text>
    </View>
  )
  :(
    <FlatList keyExtractor={this.keyExtractor} data={this.state.requestedBooksList} renderItem={this.renderItem}>

    </FlatList>
  )
}
</View>
</View>
    )
  }
}
const styles=StyleSheet.create({
  subcontainer:{
    flex:1,
    fontSize:20,
    justifyContent:"center",
    alignItems:"center"
  }
})

