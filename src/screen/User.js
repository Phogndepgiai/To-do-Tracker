import React, { Component } from "react";

import { View, Text } from "react-native";

class User extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: null,
      dob: "12/08/1968",
    };
  }

  render() {
    console.log("render");
    return (
      <View>
        <Text>User Page</Text>
      </View>
    );
  }

  componentDidMount() {
    console.log("did mount");
    setTimeout(() => {
      this.setState({
        name: "User 001",
      });
    }, 3000);
  }

  shouldComponentUpdate() {
    console.log("should update");
    return false;
  }

  componentDidUpdate() {
    console.log("did update");
  }

  componentWillUnmount() {
    console.log("wil unmount");
  }
}

export default User;
