import React, { Component } from "react";
import ListContainer from "./ListContainer";
import ActionContainer from "./ActionContainer";

class Box extends Component {
  state = {
    timers: [
      {
        title: "Learn React",
        project: "Web Developpment",
        elapsed: 5609620,
        id: "004-360",
        runningSince: null,
      },
      {
        title: "learn Angular",
        project: "Web Developpment",
        elapsed: 1349620,
        id: "005-420",
        runningSince: null,
      },
    ],
  };
  render() {
    return (
      <div className="boxed--view">
        <div className="boxed--view_box">
          <ListContainer timers={this.state.timers} />
          <ActionContainer />
        </div>
      </div>
    );
  }
}
export default Box;
