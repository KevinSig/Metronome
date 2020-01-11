import React, { useState, useEffect } from 'react'
import BPMSlider from './BPMSlider'

const Metronome = props => {
  const [bpm, setBpm] = useState(100)

  return (
    <div>
      <BPMSlider bpm={bpm} setBpm={setBpm} />
    </div>
  )
}

export default Metronome
