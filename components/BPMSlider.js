import React from 'react'
import '../styles/BPMSlider.css'

const MIN_BPM = 40
const MAX_BPM = 200

const BPMSlider = props => {
  return (
    <div className="main">
      <div className="bpm-indicator-container">
        <span className="bpm-indicator-text">{props.bpm}</span>
      </div>
      <div className="slider-container">
        <input
          className="slider"
          type="range"
          min={MIN_BPM}
          max={MAX_BPM}
          value={props.bpm}
          onInput={e => props.setBpm(e.target.value)}
        />
      </div>
    </div>
  )
}

export default BPMSlider
