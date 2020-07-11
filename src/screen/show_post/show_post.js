import React, { Component } from 'react';
import {Form, Item, Input, Label, View, } from 'native-base';
import { Button, Text } from 'react-native';
import {Image,TouchableOpacity,ScrollView,SafeAreaView,StyleSheet} from 'react-native';
import { Colors,} from 'react-native/Libraries/NewAppScreen';




export default class Login extends Component {
  render() {
    return (
      <SafeAreaView >
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
<View>
<Button  title="Show_post" onPress ={()=> this.props.navigation.openDrawer("Show_post")} style={{marginTop:20}}>



</Button>
</View>

        </ScrollView>
      </SafeAreaView>

    );
  }
}




const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
})