import React, { Component } from "react";

class TimerForm extends Component {
  state = {
    title: this.props.title || "",
    project: this.props.project || "",
  };
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  handleProjectChange = (e) => {
    this.setState({ project: e.target.value });
  };
  handleClick = () => {
    const { title, project } = this.state;
    if (this.props.id) {
      // on veut modifier
    } else {
      // on veut crée
      this.props.onFormSubmit({ title, project });
    }
  };
  render() {
    const submitText = this.props.title ? "Modifier" : "crée";
    return (
      <div className="form">
        <div className="form--content">
          <div className="form--item">
            <label>Titre</label>
            <input
              type="text"
              placeholder="mon Titre"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="form--item">
            <label>Project</label>
            <input
              type="text"
              placeholder="mon Projet"
              value={this.props.project}
              onChange={this.handleProjectChange}
            />
          </div>
        </div>
        <div className="form--button">
          <button className="button btn--submit" onClick={this.handleClick}>
            {submitText}
          </button>
          <button className="button btn--cancel">Annuler</button>
        </div>
      </div>
    );
  }
}
export default TimerForm;
