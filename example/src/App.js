import React from 'react'

import { ShapesContainer } from 'react-symmetrical-shapes-container'

const shapes = [...new Array(20)].map((el) => ({}))

export default function App() {
  return (
    <div className='App'>
      <ShapesContainer shapes={shapes} weight={4} preset={4} debug={true} />
    </div>
  )
}
