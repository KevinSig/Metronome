import React, { useState, useEffect } from 'react'
import TSInput from '../components/TSInput'

const Index = props => {
  const [ts, setTs] = useState(4)
  return <TSInput ts={ts} setTs={setTs} label={'Beats per Measure'}></TSInput>
}

export default Index
