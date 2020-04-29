import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div>
        <button className="button__outline" onClick={this.props.handleFormOpen}>
          +
        </button>
      </div>
    );
  }
}
export default Box;
