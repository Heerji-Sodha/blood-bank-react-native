import React, { Component } from 'react';
import {Form, Item, Input, Label, View, } from 'native-base';
import { Button, Text } from 'native-base';
import {
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
export default class Login extends Component {
  render() {
    return (
      <SafeAreaView >
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
      <View>
<Text style={{textAlign:"center", fontWeight: 'bold' ,marginTop: 120,fontSize:40,color:"brown",fontFamily:"cursive"}}>Login</Text>
          <Form>
            <Item floatingLabel>
              <Label style={{color:"brown"}}  > Email </Label>
              <Input style={{marginTop:10}} />
            </Item>
            <Item floatingLabel last>
              <Label style={{color:"brown"}}>Password</Label>
              <Input style={{marginTop:10}} />
            </Item>
          </Form>
          <Button rounded danger style={{ width: 300, marginLeft: 30, marginTop: 70,backgroundColor:"brown" }}
                 onPress ={()=>this.props.navigation.navigate("Home")}
                >
                    <Text style={{ marginLeft: 90, fontWeight: 'bold' ,fontFamily:"cursive",fontSize:20 }}>Login</Text>
                    
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