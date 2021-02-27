import React from 'react'

import Shape from './Shape'

import style from './style'

const ShapesContainer = ({
  shapes = [],
  weight = 4,
  preset,
  spacing = 0,
  className,
  forceWeight = true,
  debug = false
}) => {
  /* Presets */
  const presets = {
    1: () => ({ width: 1, height: 1 }),
    2: (index) => ({
      width: (index + 1) % 3 == 0 ? 2 : 1,
      height: 1
    }),
    3: (index) => ({
      width: [1, 5].indexOf(index % 10) != -1 ? 2 : 1,
      height: 1
    }),
    4: (index) => ({
      width: [2, 12].indexOf(index % 20) != -1 ? 2 : 1,
      height: [2, 3, 11, 12].indexOf(index % 20) != -1 ? 2 : 1
    })
  }
  const calculatePresetShapeSize = (shape) => {
    return presets[preset](shapes.indexOf(shape))
  }
  /* Calc Size */
  const shapeTypes = {
    /* Square */
    square: { width: 1, height: 1 },
    'big-square': { width: 2, height: 2 },

    /* Rectangle */
    rectangle: { width: 2, height: 1 },
    'big-rectangle': { width: 3, height: 2 },

    /* Rectangle Vertical */
    'rectangle-ver': { width: 1, height: 2 },
    'big-rectangle-ver': { width: 2, height: 3 }
  }

  const calulateShapeSize = (shape) => {
    /* Preset */
    if (preset && presets[preset]) {
      return calculatePresetShapeSize(shape)
    }

    /* Type */
    if (shape.type && shapeTypes[shape.type]) {
      return shapeTypes[shape.type]
    }

    /* Size */
    if (shape.size) {
      return {
        width: shape.size.width < 1 ? 1 : shape.size.width,
        height: shape.size.height < 1 ? 1 : shape.size.height
      }
    }

    return { width: 1, height: 1 }
  }
  /* Grid */
  const generateGrid = () => {
    let grid = []
    let pos = 0

    shapes.forEach((shape, i) => {
      shape.size = calulateShapeSize(shape)
      let { width, height } = shape.size

      while (grid[pos] == 'spacer') {
        pos++
      }

      /* Force Weight */
      if (width > weight) {
        if (forceWeight) {
          let aspectRation = width / height

          shape.size.width = weight
          shape.size.height = Math.round(weight / aspectRation)
            ? Math.round(weight / aspectRation)
            : 1

          ;({ width, height } = shape.size)
        } else {
          throw 'Shape is too big'
        }
      }

      /* Check Collition & Overflow */
      if (width > 1) {
        whileLoop: while (true) {
          for (let i = 0; i <= width - 1; i++) {
            /* Collision */
            if (grid[pos + i] == 'spacer') {
              pos += 1

              continue whileLoop
            }
            /* Overflow */
            if (i > 0 && (pos + i) % weight == 0) {
              pos += i

              continue whileLoop
            }
          }

          break
        }
      }

      /* Debug Indexing */
      if (!shape.component) shape.component = debug ? `${i}` : ``

      /* Add shape to grid */
      grid[pos] = shape

      /* Width Spaces */
      for (let i = 1; i <= width - 1; i++) {
        grid[pos + i] = 'spacer'
      }
      /* Height Spaces */
      for (let j = 1; j <= height - 1; j++) {
        for (let i = 0; i <= width - 1; i++) {
          grid[pos + weight * j + i] = 'spacer'
        }
      }

      pos++
    })

    /* Fill Empty */
    for (let i = 0; i < grid.length; i++) {
      if (!grid[i]) grid[i] = 'spacer'
    }

    return grid.map((shape, i) => {
      let props = {
        key: `shape-${i}`,
        spacing,
        debug,
        ...shape,
        weight
      }

      return <Shape {...props} />
    })
  }

  /* ClassName */
  const generateClassName = () => {
    let result = 'symmetrical-shapes-container'

    if (className) result += ` ${className}`
    if (debug) result += ` debug`

    return result
  }
  /* Style */
  const generateStyle = () => {
    let result = style['symmetrical-shapes-container']

    return result
  }

  return (
    <div className={generateClassName()} style={generateStyle()}>
      {generateGrid()}
    </div>
  )
}

export { ShapesContainer }
