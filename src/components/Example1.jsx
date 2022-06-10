import React from 'react'
import {useState} from 'react'

const Example1 = () => {
    const [showContent, setShowContent] = useState(false)

    const changeContent = () => setShowContent(!showContent)

  return (
      <div>
          <div>{showContent ? 'You found the hidden content!': 'Click the button'}</div> 
          <button onClick={changeContent}>Click here</button>
      </div>
  )
}

export default Example1