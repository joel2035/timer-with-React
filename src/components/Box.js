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
  handleEditTimer = ({ id, title, project }) => {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === id) {
          return {
            ...timer,
            title,
            project,
          };
        }
        return { ...timer };
      }),
    });
  };
  handleDelete = (id) => {
    this.setState({
      timers: this.state.timers.filter((timer) => timer.id !== id),
    });
  };
  handlePlay = (id) => {
    const now = Date.now();
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (id === timer.id) {
          return {
            ...timer,
            runningSince: now,
          };
        } else {
          return {
            ...timer,
          };
        }
      }),
    });
  };
  handlePause = (id) => {
    const now = Date.now();
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (id === timer.id) {
          const nexElapsed = now - timer.runningSince;
          return {
            ...timer,
            runningSince: null,
            elapsed: timer.elapsed + nexElapsed,
          };
        } else {
          return {
            ...timer,
          };
        }
      }),
    });
  };
  render() {
    return (
      <div className="boxed--view">
        <div className="boxed--view_box">
          <ListContainer
            onFormSubmit={this.handleEditTimer}
            onDelete={this.handleDelete}
            timers={this.state.timers}
            onPlay={this.handlePlay}
            onPause={this.handlePause}
          />
          <ActionContainer onFormSubmit={this.handleCreateTimer} />
        </div>
      </div>
    );
  }
}
export default Box;
