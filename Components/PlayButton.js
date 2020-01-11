import React, { useState, useEffect } from "react";
import PlayCircleFilledIcon from "mdi-react/PlayCircleFilledIcon";
import PauseCircleFilledIcon from "mdi-react/PauseCircleFilledIcon";

import "../styles/PlayButton.css";

const PlayButton = (props) => {


  return (
    <div
      className="button"
      onClick={() => {
        props.play()
        props.setIsPlaying(!props.isPlaying);
      }}
    >
      {props.isPlaying ? <PauseCircleFilledIcon/> : <PlayCircleFilledIcon /> }
    </div>
  );
};

export default PlayButton;
