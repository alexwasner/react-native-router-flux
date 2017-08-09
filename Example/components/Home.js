import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions,ActionConst} from "react-native-router-flux";

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d82455",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
});

class Home extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Button onPress={()=>Actions.launch()}>Go to Launch page</Button>
                <Button onPress={()=>{
                    console.log('hello')
                    this.props.navigation.navigate('login',{type:ActionConst.REPLACE})
                }}>Logout</Button>

            </View>
        );
    }
}

module.exports = Home;
