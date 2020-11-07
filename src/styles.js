export default {
  shapes__container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '5px',
    boxSizing: 'border-box'
  },
  shape: {
    maxWidth: '100%'
  },
  square: {
    width: '25%'
  },
  rectangle: {
    width: '50%'
  },
  shape__inner: {
    position: 'relative',
    paddingBottom: '100%'
  },
  rectangle__inner: {
    paddingBottom: '50%'
  },
  shape__content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    margin: '5px',
    width: 'calc(100% - 10px)',
    height: 'calc(100% - 10px)',
    overflow: 'hidden'
  }
}
