import React, { useState, useEffect } from 'react'
import BPMSlider from './BPMSlider'
import TSInput from './TSInput'

const Metronome = props => {
  const [bpm, setBpm] = useState(100)
  const [ts, setTs] = useState(4)

  return (
    <div>
      <BPMSlider bpm={bpm} setBpm={setBpm} />
      <TSInput ts={ts} setTs={setTs} label={'Beats per Measure'}/>
    </div>
  )
}

export default Metronome
