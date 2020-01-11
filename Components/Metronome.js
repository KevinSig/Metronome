import React, { useState, useEffect } from 'react'
import BPMSlider from './BPMSlider'
import TSInput from './TSInput'
import PlayButton from './PlayButton'

const Metronome = props => {
  const [bpm, setBpm] = useState(100)
  const [ts, setTs] = useState(4)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div>
      <BPMSlider bpm={bpm} setBpm={setBpm} />
      <TSInput ts={ts} setTs={setTs} label={'Beats per Measure'} />
      <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  )
}

export default Metronome
