import styled from '@emotion/styled';

export default styled.section(props => ({
  height: 300,
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1em',
  '.slide-image': {
    position: 'absolute',
    top: 0,
    left: 0,
    'img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 375,
      height: 300,
      objectFit: 'cover'
    }
  },
  '.btn': {
    position: 'relative',
    zIndex: 5,
    width: '2.5em',
    height: '2.5em',
    backgroundColor: 'white',
    borderRadius: '50%',
    display: 'grid',
    placeContent: 'center',
    'img': { transform: 'scale(.8)' }
  }
}));