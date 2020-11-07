import React, { useEffect, useState } from 'react'

import { ShapesContainer } from 'react-symmetrical-shapes-container'

const shapesArray = [
  { component: 'HI' },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {}
].map((el) => ({ ...el, ...{ background: 'random' } }))

const App = () => {
  const [shapesArray, setShapesArray] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setShapesArray(
        [{}, {}, {}, {}, {}, {}, {}, {}].map((el) => ({
          ...el,
          ...{ background: 'random' }
        }))
      )
    }, 3000)
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>react-symmetrical-shapes-container</h1>
      <ShapesContainer
        className='outline-shapes'
        weight={5}
        preset={'random'}
        shapes={shapesArray}
        style={{ width: '100%', maxWidth: '1000px' }}
      />
    </div>
  )
}

export default App
