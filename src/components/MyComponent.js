import React from "react";

class Mycomponent extends React.Component {
  state = {
    name: 'Ronaldo',
    address: 'Portugal',
    age: 26
  }

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
      </div>
    );
  }
}

export default Mycomponent;
