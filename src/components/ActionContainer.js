import React, { Component } from "react";
import Button from "./Button";
import TimerForm from "./TimerForm";

class ActionContainer extends Component {
  state = {
    isFormOpen: false,
  };
  render() {
    if (this.state.isFormOpen) {
      return <TimerForm />;
    } else {
      return <Button />;
    }
  }
}
export default ActionContainer;
