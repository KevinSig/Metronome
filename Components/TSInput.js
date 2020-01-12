import React from 'react'
import '../styles/TSInput.css'

const MIN_TS = 1
const MAX_TS = 10

const TSInput = props => {
  const { ts, setTs, label } = props
  const onChange = event => {
    setTs(event.target.value)
  }

  return (
    <div className="field">
      <input
        type="number"
        defaultValue={ts}
        placeholder={label}
        onChange={onChange}
        min={MIN_TS}
        max={MAX_TS}
      />
    </div>
  )
}

export default TSInput
