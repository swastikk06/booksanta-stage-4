import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style={{flex:1}}>
<View style={styles.DrawerItemsContainer}>
<DrawerItems {...this.props}/>
</View>
<View style={styles.logOutContainer}>
<TouchableOpacity style={styles.logOutButton} onPress={()=>{
    this. props.navigation.navigate('WelcomeScreen')
    firebase.auth().signOut()
}}>
<Text style={styles.logOutText}>
    logOut     
</Text>
</TouchableOpacity>
</View>
            </View>
        )
    }
}
var style=StyleSheet.create({
DrawerItemsContainer:{flex:0.8},
logOutContainer:{flex:0.2,justifyContent:"flex-end",paddingBottom:30},
logOutButton:{height:30,width:'100%',justifyContent:'Center',padding:10},
logOutText:{fontSize:30,fontWeight:'bold'}
})
