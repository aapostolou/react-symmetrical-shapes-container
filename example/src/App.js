import React from 'react'

import { ShapesContainer } from 'react-symmetrical-shapes-container'
import 'react-symmetrical-shapes-container/dist/index.css'

const shapesArray = [
  { className: 'round-shape' },
  { type: 'rectangle' },
  {},
  { type: 'rectangle' },
  {},
  {},
  {},
  {},
  { type: 'rectangle' },
  {}
].map((el) => ({ ...el, ...{ background: 'random' } }))

const App = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <h1>react-symmetrical-shapes-container</h1>
    <div style={{ width: '100%', maxWidth: '1000px' }}>
      <ShapesContainer
        className='outline-shapes'
        weight={3}
        preset={3}
        shapes={shapesArray}
      />
    </div>
  </div>
)

export default App
