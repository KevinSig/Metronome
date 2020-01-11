import React, { useState, useEffect } from 'react'
import BPMSlider from '../components/BPMSlider'
import Metronome from '../components/Metronome'
import Head from 'next/head'

const Index = props => {
  const [bpm, setBpm] = useState(40)
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Asap&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Metronome />
    </div>
  )
}

export default Index