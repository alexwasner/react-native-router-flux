import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions,ActionConst} from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
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

export default class extends React.Component {
  render() {
    const title = this.props.title || 'No Title';
    const data = this.props.data || 'No Data';
    console.log("Login RENDER");
    return (
      <View {...this.props}  style={styles.container}>
        <Text>Login</Text>
        <Button onPress={()=>Actions.home({type:ActionConst.REPLACE})}>REPLACE to Home</Button>
      </View>
    );
  }
}
