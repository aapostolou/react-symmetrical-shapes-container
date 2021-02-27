import React from 'react'

import style from '../style'

const Shape = ({
  weight,
  size = { width: 1, height: 1 },
  spacing = 0,
  className,
  component,
  debug = false
}) => {
  /* ClassName */
  const generateShapeClassName = () => {
    let result = 'shape'

    return result
  }
  const generateInnerClassName = () => {
    let result = 'shape-inner'

    return result
  }
  const generateContentClassName = () => {
    let result = 'shape-content'

    if (className) result += ` ${className}`

    return result
  }
  /* Style */
  const generateShapeStyle = () => {
    let result = { ...style['shape'], ...{ width: `${100 / weight}%` } }

    return result
  }
  const generateInnerStyle = () => {
    let result = style['shape-inner']

    if (debug) result = { ...result, ...style.debug['shape-inner'] }

    return result
  }
  const generateContentStyle = () => {
    let result = {
      ...style['shape-content'],
      ...{
        width: `calc(${100 * size.width}% - ${spacing * 2}px)`,
        height: `calc(${100 * size.height}% - ${spacing * 2}px)`,
        margin: spacing || 'unset'
      }
    }

    if (debug) result = { ...result, ...style.debug['shape-content'] }

    return result
  }

  return (
    <div className={generateShapeClassName()} style={generateShapeStyle()}>
      <div className={generateInnerClassName()} style={generateInnerStyle()}>
        {component && (
          <div
            className={generateContentClassName()}
            style={generateContentStyle()}
          >
            {component}
          </div>
        )}
      </div>
    </div>
  )
}

export default Shape
