import React from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Welcome from './../screen/welcome/welcome'
import Login from './../screen/login/login'
import Signup from './../screen/signup/signup'
import Home from './../screen/home/home'
import Creat_Post from './../screen/creat_post/creat_post'
import Setting from './../screen/setting/setting'
import Show_Post from './../screen/show_post/show_post'

import { createDrawerNavigator } from 'react-navigation-drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'


const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
    // navigationOptions: { drawerIcon: () => <Ionicons name="ios-create" size={24} /> }

  },
  Creat_Post: {
    screen: Creat_Post,
  },

Show_Post: {
  screen: Show_Post,
},


Setting: {
  screen: Setting,
},






});




const AppNavigator = createStackNavigator({
  // welcome: {
  //   screen: Welcome,
  //   navigationOptions :{
  //     header: null
  //   },
  // },
  
 
  // Login: {
  //     screen: Login,
  //     navigationOptions :{
  //       header: null
  //     },
  //   },

  //   Signup: {
  //     screen: Signup,
  //     navigationOptions :{
  //       header: null
  //     }, 
  // },


  Home: {
    screen: MyDrawerNavigator,
    navigationOptions :{
      header: null
    },
  },

  Creat_Post: {
    screen: Creat_Post,
    // navigationOptions :{
    //   header: null
    // },
  },


})


export default createAppContainer(AppNavigator)