import React from "react";
import Container from "./Container";
import PropTypes from "prop-types";

const ListContainer = (props) => {
  const renderContainer = () => {
    return props.timers.map((timer) => {
      return (
        <Container
          onFormSubmit={props.onFormSubmit}
          key={timer.id}
          onDelete={props.onDelete}
          onPlay={props.onPlay}
          onPause={props.onPause}
          {...timer}
        />
      );
    });
  };
  return <div className="list--container">{renderContainer()}</div>;
};
ListContainer.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  timers: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
};
export default ListContainer;
