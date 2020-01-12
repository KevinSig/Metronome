import React, { useState, useEffect, useRef } from 'react'
import BPMSlider from './BPMSlider'
import TSInput from './TSInput'
import PlayButton from './PlayButton'

const Metronome = props => {
  const [bpm, setBpm] = useState(100)
  const [ts, setTs] = useState(4)
  const [isPlaying, setIsPlaying] = useState(false)

  const click1 = useRef()
  const click2 = useRef()

  const play = () => {}

  return (
    <div>
      <BPMSlider bpm={bpm} setBpm={setBpm} />
      <TSInput ts={ts} setTs={setTs} label={'Beats per Measure'} />
      <PlayButton
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        play={play}
      />
      <audio ref={click1} src="/click1.wav" />
      <audio ref={click2} src="/click2.wav" />
    </div>
  )
}

export default Metronome
