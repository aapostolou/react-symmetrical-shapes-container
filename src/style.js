const style = {
  'symmetrical-shapes-container': {
    display: 'flex',
    flexWrap: 'wrap'
  },
  shape: {
    position: 'relative',
    width: '100%'
  },
  'shape-inner': {
    position: 'relative',
    width: '100%',
    paddingBottom: '100%'
  },
  'shape-content': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 1
  },

  debug: {
    'shape-content': {
      outline: '1px dashed red'
    },
    'shape-inner': {
      outline: '1px dashed #ddd'
    }
  }
}

export default style
