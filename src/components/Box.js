import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ListContainer from "./ListContainer";
import ActionContainer from "./ActionContainer";

class Box extends Component {
  state = {
    timers: [
      {
        title: "Learn React",
        project: "Web Developpment",
        elapsed: 5609620,
        id: "0a4a79cb-b06d-4cb1-883d-549a1e3b66d7",
        runningSince: null,
      },
      {
        title: "learn Angular",
        project: "Web Developpment",
        elapsed: 1349620,
        id: "0a4a79cb-b06d-4cb1-883d-549a1e3b66d4",
        runningSince: null,
      },
    ],
  };

  handleCreateTimer = ({ title, project }) => {
    const timer = {
      title,
      project,
      id: uuidv4(),
      elapsed: 0,
      runningSince: null,
    };
    this.setState({
      timers: [...this.state.timers, timer],
    });
  };
  render() {
    return (
      <div className="boxed--view">
        <div className="boxed--view_box">
          <ListContainer timers={this.state.timers} />
          <ActionContainer onFormSubmit={this.handleCreateTimer} />
        </div>
      </div>
    );
  }
}
export default Box;
