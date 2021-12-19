import React from "react";

class Confirm extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue",
    };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default Confirm;
