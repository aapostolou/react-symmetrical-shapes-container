import React from 'react'

import styles from './styles.module.css'

const Shape = (props = {}) => {
  const { className = '', type = 'square', background, component } = props

  const generateShapeProps = () => ({
    ...{
      ...props,
      ...{
        className: `shape ${type} ${styles.shape} ${
          styles[type] || styles.square
        } ${className} ${classPreset()}`
      }
    }
  })

  const classPreset = () => {
    let result = ''

    if (className.includes('round-shape'))
      result += styles.shape__content__round + ' '

    return result
  }

  return (
    <div {...generateShapeProps()}>
      <div
        className={`shape__inner ${type}__inner ${styles.shape__inner} ${
          type === 'rectangle' ? styles.rectangle__inner : styles.square__inner
        }`}
      >
        <div
          className={`shape__content ${styles.shape__content} ${type}__content`}
          style={{
            backgroundImage: `url(${
              background === 'random'
                ? 'https://picsum.photos/1920/' +
                  (1080 + Math.floor(Math.random() * 1000))
                : background
            }`
          }}
        >
          <div
            className={`shape__logo ${styles.shape__logo} ${type}__logo ${
              props.type === 'rectangle'
                ? styles.rectangle__logo
                : styles.square__logo
            }`}
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

  const generateContainerProps = () => ({
    ...{
      ...props,
      ...{
        className: `shapes-container ${
          styles.shapes__container
        } ${className} ${classPreset()}`
      }
    }
  })

  const preset3 = (index) =>
    (index + -1) % 10 === 0 || (index % 5 === 0 && index % 10 !== 0)
      ? 'rectangle'
      : 'square'

  const classPreset = () => {
    let result = ''

    if (className.includes('outline-shapes'))
      result += styles.shapes__container__outline + ' '
    if (className.includes('round-shapes'))
      result += styles.shape__container__round + ' '

    return result
  }

  const generateShapeProps = (shape, index) => ({
    ...props,
    ...{
      style: generateShapeStyle(getShapeType(shape)),
      type: getShapeType(shape, index),
      background: shape.background,
      component: shape.component
    }
  })

  const generateShapeStyle = (type) => {
    let size = type === 'rectangle' ? 2 : 1

    let style = {
      width: `${(100 / weight) * size}%`,
      minWidth: minWidth ? minWidth * size : 0
    }

    return style
  }
  const getShapeType = (shape) => {
    if (preset === 3) {
      return preset3(shapes.indexOf(shape))
    } else {
      return shape.type || 'square'
    }
  }

  return (
    <div {...generateContainerProps()}>
      {shapes.map((shape, index) => (
        <Shape key={`shape${index}`} {...generateShapeProps(shape, index)} />
      ))}
    </div>
  )
}
