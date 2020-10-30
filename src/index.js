import React, { useEffect, useState } from 'react'

import styles from './styles.js'

const shapeTypes = {
  square: { size: 1 },
  rectangle: { size: 2 },
  bigSquare: { size: 2 }
}

const Shape = (props = {}) => {
  const {
    className = '',
    style,
    type = 'square',
    weight,
    minWidth,
    background,
    component
  } = props

  const generateShapeProps = () => ({
    className: `shape ${type}`,
    style: getShapeStyle()
  })

  const getShapeStyle = () => {
    let size = shapeTypes[type].size

    let result = {
      width: `${(100 / weight) * size}%`,
      minWidth: minWidth ? minWidth * size : 0
    }

    return { ...styles.shape, ...styles[type], ...result, ...style }
  }

  /* ============= */

  const classPresetInner = () => {
    let result = {}

    if (className.includes('outline-shape'))
      result = { ...result, ...{ outline: '1px dashed #ddd' } }

    return result
  }

  const shapeInnerStyle = () => ({
    ...styles.shape__inner,
    ...styles[`${type}__inner`],
    ...classPresetInner()
  })

  const classPresetContent = () => {
    let result = {}

    if (className.includes('round-shape'))
      result = { ...result, ...{ borderRadius: '100vmax' } }

    return result
  }

  const shapeContentStyle = () => ({
    ...{
      backgroundImage: `url(${
        background === 'random'
          ? 'https://picsum.photos/1920/' +
            (1080 + Math.floor(Math.random() * 1000))
          : background
      }`
    },
    ...styles.shape__content,
    ...styles[`${type}__content`],
    ...classPresetContent()
  })

  return (
    <div {...generateShapeProps()}>
      <div className={`shape__inner ${type}__inner`} style={shapeInnerStyle()}>
        <div className={`shape__content`} style={shapeContentStyle()}>
          <div
            className={`shape__logo ${type}__logo`}
            style={{ ...styles.shape__logo, ...styles[`${type}__logo`] }}
          >
            {component}
          </div>
        </div>
      </div>
    </div>
  )
}

export const ShapesContainer = (props = {}) => {
  const { className = '', weight = 4, preset, minWidth, shapes = [] } = props

  const [shapesArray, setShapesArray] = useState([])

  useEffect(() => {
    setShapesArray(generateSpaces(shapes.map((shape) => generateShape(shape))))
  }, [])

  const generateShape = (shape) => {
    var newShape = JSON.parse(JSON.stringify(shape))

    newShape.type = getShapeType(shape)
    newShape.className = getShapeClass(shape)
    newShape.weight = weight
    newShape.minWidth = minWidth

    return newShape
  }

  const generateSpaces = (array) => {
    array.forEach((el) => generateSpacers)

    return array
  }

  const generateSpacers = (shape, index) => {
    if (shape.type === 'bigSquare') {
      addSpacer(2, weight - 2, index)
    } else if (shape.type === 'verticalRectangle') {
      addSpacer(1, weight - 1, index)
    }

    return shape
  }
  const addSpacer = (spaceSize, after, currentPosition) => {
    if (
      spaceSize === undefined ||
      after === undefined ||
      currentPosition === undefined
    )
      return

    let spaceShapes = shapes.splice(currentPosition + 1, after)
    let currentSize = 0
    let maxSize = spaceShapes.length

    console.log(spaceShapes)

    // for (let i = 0; i < maxSize; i++) {
    //   let size = shapeTypes[spaceShapes[i].type].size

    //   if (currentSize + size === maxSize) {
    //     spaceShapes[i].style = {
    //       ...spaceShapes[i].style,
    //       ...{ marginRight: `${spaceSize}%` }
    //     }
    //   }
    // }
  }

  const generateContainerProps = () => ({
    ...{
      ...props,
      ...{
        className: `shapes-container ${className || ''}`
      },
      ...{ style: { ...styles.shapes__container, ...{ width: '100%' } } },
      shapes: null
    }
  })

  /* Shape TYpe */
  const getShapeType = (shape) => {
    let type = shape.type

    if (preset === 3) {
      type = preset3(shapes.indexOf(shape))
    } else if (preset === 'random') {
      type = presetRandom(shapes.indexOf(shape))
    }

    return type || 'square'
  }

  /* Shape Presets */
  const preset3 = (index) =>
    (index + -1) % 10 === 0 || (index % 5 === 0 && index % 10 !== 0)
      ? 'rectangle'
      : 'square'

  const presetRandom = (index) => {
    let lineWeight =
      shapes.slice(0, index).reduce((total, current) => {
        return (total += shapeTypes[current.type].size)
      }, 0) % weight

    let type =
      lineWeight + 1 < weight
        ? Math.round(Math.random())
          ? 'rectangle'
          : 'square'
        : 'square'

    return type
  }

  /* Shape Class & Preset */
  const getShapeClass = (shape) => {
    let result = `shapes-container ${shape.className || ''}`

    if (className.includes('outline-shapes')) result += ' outline-shape'
    if (className.includes('round-shapes')) result += ' round-shape'

    return result
  }

  return (
    <div {...generateContainerProps()}>
      {shapesArray.map((shape, index) => (
        <Shape key={`shape${index}`} {...shape} />
      ))}
    </div>
  )
}
