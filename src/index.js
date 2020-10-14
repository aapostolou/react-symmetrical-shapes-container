import React from 'react'

import styles from './styles.module.css'

const Shape = ({
  type = 'square',
  background = 'random',
  style = {},
  component
}) => (
  <div
    className={`shape ${type || 'square'} ${styles.shape} ${
      styles[type] || styles.square
    }`}
    style={style}
  >
    <div
      className={`shape__inner ${type || 'square'}__inner ${
        styles.shape__inner
      } ${
        type === 'rectangle' ? styles.rectangle__inner : styles.square__inner
      }`}
    >
      <div
        className={`shape__content ${styles.shape__content} ${
          type || 'square'
        }__content ${
          type === 'rectangle'
            ? styles.rectangle__content
            : styles.square__content
        }`}
        style={{
          backgroundImage: `url(${
            background === 'random'
              ? 'https://picsum.photos/1920/' +
                (1080 + Math.floor(Math.random() * 100))
              : background
          }`
        }}
      >
        <div
          className={`shape__logo ${styles.shape__logo} ${
            type || 'square'
          }__logo ${
            type === 'rectangle' ? styles.rectangle__logo : styles.square__logo
          }`}
        >
          {component}
        </div>
      </div>
    </div>
  </div>
)

export const ShapesContainer = ({
  shapes,
  weight = 4,
  style = {},
  minWidth,
  preset
}) => {
  const getShapeType = (shape) => {
    if (preset === 3) {
      return preset3(shapes.indexof(shape))
    } else {
      return shape.type || 'square'
    }
  }
  const generateStyle = (type) => {
    let size = type === 'rectangle' ? 2 : 1

    return {
      width: `${(100 / weight) * size}%`,
      minWidth: minWidth ? minWidth * size : 0
    }
  }

  const preset3 = (index) =>
    (index + -1) % 10 === 0 || (index % 5 === 0 && index % 10 !== 0)
      ? 'rectangle'
      : 'square'

  console.log(styles)

  return (
    <div
      className={`shapes-container ${styles.shapes__container}`}
      style={style}
    >
      {shapes.map((shape, index) => (
        <Shape
          key={`shape${index}`}
          style={generateStyle(getShapeType(shape))}
          type={getShapeType(shape, index)}
          background={shape.background}
          component={shape.component}
        />
      ))}
    </div>
  )
}
