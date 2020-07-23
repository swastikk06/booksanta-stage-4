import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class SettingScreen extends Component{
    constructor(){
        super()
        this.state={
            emailId:'',
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
            docId:'',
        }
    }
    getUserDetails=()=>{
        var email=firebase.auth().currentUser.email
        db.collections('users').where('email_id','==',email).get()
        .then(snapShot=>{
            snapShot.forEach(doc=>{
                var data=doc.data()
                this.setState({
                    emailId:data.email_id,
                    firstName:data.first_name,
                    lastName:data.last_name,
                    address:data.address,
                    contact:data.contact,
                    docId:doc.id,
                })
            })
        })
    }

updateUserDetails=()=>{
   db.collections('users').doc(this.state.docId).update({
    first_name:this.state.firstName,
    last_name:this.state.lastName,
    contact:this.state.contact,
    address:this.state.address,
   })
   Alert.alert('profile updated succesfully')

   
}
componentDidMount(){
    this.getUserDetails();
}
render(){
    return(
    <View style={styles.container}>
<MyHeader title='settings' navigation={this.props.navigation}>

</MyHeader>
<View style={styles.formContainer}>
<TextInput
          style={styles.formTextInput}
          placeholder ={"First Name"}
          maxLength ={8}
          value={this.state.firstName}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Last Name"}
          maxLength ={8}
          value={this.state.lastName}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Contact"}
          maxLength ={10}
          value={this.state.contact}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Address"}
          multiline = {true}
          value={this.state.address}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
        />
        <TouchableOpacity style={styles.button} onPress={()=>{this.updateUserDetails()}}>
         <Text style={styles.buttonText}>
             save
             </Text>   
        </TouchableOpacity>
</View>
    </View>
    )
}
}
const styles = StyleSheet.create({
    container:{
     flex:1,
    
     alignItems: 'center',
     justifyContent: 'center'
   },
  formContainer:{
     flex:1,
  width:'100%',
     alignItems:'center',
     
   },
  
   formTextInput:{
     width:"75%",
     height:35,
     alignSelf:'center',
     borderColor:'#ffab91',
     borderRadius:10,
     borderWidth:1,
     marginTop:20,
     padding:10
   },
 

  
   button:{
     width:300,
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"#ff9800",
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16,
     padding: 10
   },
   buttonText:{
     color:'#ffff',
     fontWeight:'200',
     fontSize:20
   }
  })
  