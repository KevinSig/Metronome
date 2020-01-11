import React from 'react'
import '../styles/TSInput.css'

const TSInput = props => {
  const { ts, setTs, label } = props
  const onChange = event => {
    setTs(event.target.value)
  }

  return (
    <div className="field">
      <input type="text" value={ts} placeholder={label} onChange={onChange} />
    </div>
  )
}

export default TSInput
