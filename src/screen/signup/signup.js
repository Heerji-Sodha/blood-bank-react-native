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
export default class Signup extends Component {
  render() {
    return (
      <SafeAreaView >
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
      <View>
<Text style={{textAlign:"center", fontWeight: 'bold' ,marginTop: 40,fontSize:40,color:"brown",fontFamily:"cursive"}}>Signup</Text>
          <Form>
          <Item floatingLabel>
              <Label style={{color:"brown"}}  > First Name </Label>
              <Input style={{marginTop:10}} />
            </Item>
            <Item floatingLabel>
              <Label style={{color:"brown"}}  > Last Name </Label>
              <Input style={{marginTop:10}} />
            </Item>
            <Item floatingLabel>
              <Label style={{color:"brown"}}  >  Contact </Label>
              <Input style={{marginTop:10}} />
            </Item>
            <Item floatingLabel>
              <Label style={{color:"brown"}}  >  City </Label>
              <Input style={{marginTop:10}} />
            </Item>
            <Item floatingLabel>
              <Label style={{color:"brown"}}  >  Post Code  </Label>
              <Input style={{marginTop:10}} />
            </Item>
            <Item floatingLabel>
              <Label style={{color:"brown"}}  >   Blood Group  </Label>
              <Input style={{marginTop:10}} />
            </Item>
            <Item floatingLabel>
              <Label style={{color:"brown"}}  >  Country </Label>
              <Input style={{marginTop:10}} />
            </Item>
            <Item floatingLabel>
              <Label style={{color:"brown"}}  > Email </Label>
              <Input style={{marginTop:10}} />
            </Item>
            <Item floatingLabel last>
              <Label style={{color:"brown"}}>Password</Label>
              <Input style={{marginTop:10}} />
            </Item>
          </Form>
          <Button rounded danger style={{ width: 300, marginLeft: 30, marginTop: 50,backgroundColor:"brown" }}
                 onPress ={()=>this.props.navigation.navigate("Login")}
                 >
                    <Text style={{ marginLeft: 90, fontWeight: 'bold' ,fontFamily:"cursive",fontSize:20 }}>Signup</Text>
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