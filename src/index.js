import React, { useEffect, useState } from 'react'

import styles from './styles.js'

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
    let size = type === 'rectangle' ? 2 : 1

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
  const {
    className = '',
    style,
    weight = 4,
    preset,
    minWidth,
    shapes = []
  } = props

  const [shapesArray, setShapesArray] = useState([])

  useEffect(() => {
    setShapesArray(shapes.map((shape) => generateShape(shape)))
  }, [shapes])

  const generateShape = (shape) => {
    shape.type = getShapeType(shape)
    shape.className = getShapeClass(shape)
    shape.weight = weight
    shape.minWidth = minWidth

    return shape
  }

  const generateContainerProps = () => ({
    ...{
      ...props,
      ...{
        className: `shapes-container ${className || ''}`
      },
      ...{
        style: { ...styles.shapes__container, ...{ width: '100%' } },
        ...style
      },
      shapes: null
    }
  })

  /* Shape TYpe */
  const getShapeType = (shape) => {
    if (preset === 3) {
      return preset3(shapes.indexOf(shape))
    } else if (preset === 'random') {
      return presetRandom(shapes.indexOf(shape))
    }

    return shape.type
  }

  /* Shape Presets */
  const preset3 = (index) =>
    (index + -1) % 10 === 0 || (index % 5 === 0 && index % 10 !== 0)
      ? 'rectangle'
      : 'square'

  const presetRandom = (index) => {
    let lineWeight =
      shapes.slice(0, index).reduce((total, current) => {
        return (total += current.type === 'rectangle' ? 2 : 1)
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
        <Shape
          key={`shape${index}${Math.floor(Math.random() * 9999999)}`}
          {...shape}
        />
      ))}
    </div>
  )
}
