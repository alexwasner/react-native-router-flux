import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: 'red',
  }
});

class Launch extends React.Component {
  render(){
    console.log("Launch RENDER");
    return (
      <View {...this.props}  style={styles.container}>
        <Text>Launch page</Text>
        <Button onPress={()=>Actions.login()}>Go to Login page</Button>
        <Button onPress={()=>Actions.home()}>Go to Home page</Button>
      </View>
    );
  }
}

module.exports = Launch;
