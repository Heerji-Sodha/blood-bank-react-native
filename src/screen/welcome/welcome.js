import React from 'react';
import {
    View,
} from 'react-native';
import { Button, Text } from 'native-base';
export default class Welcome extends React.Component {

    render() {
        return (
            <View>
<Text style={{textAlign:"center", fontWeight: 'bold' ,marginTop: 120,fontSize:40,color:"brown",fontFamily:"cursive"}}>Well Come to Blood Bank</Text>
                <Button rounded danger style={{ width: 300, marginLeft: 40, marginTop: 70,backgroundColor:"brown" }}
                onPress ={()=>this.props.navigation.navigate("Login")}
                >
                <Text style={{ marginLeft: 100, fontWeight: 'bold' ,fontFamily:"cursive",fontSize:20 }}>Login</Text>
                </Button>
                 <Button rounded danger style={{ width: 300, marginLeft: 40, marginTop: 30 ,backgroundColor:"brown" }}
                onPress ={()=>this.props.navigation.navigate("Signup")}
                >
                <Text style={{ marginLeft: 100, fontWeight: 'bold',fontFamily:"cursive",fontSize:20 }}>Signup</Text>
                </Button>
            </View>
        );
    };
}