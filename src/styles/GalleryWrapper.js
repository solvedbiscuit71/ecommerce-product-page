import styled from '@emotion/styled';

export default styled.div(props => ({
  width: 445,
  flexShrink: 0,
  '.gallery-image': {
    width: '100%',
    height: 445,
    position: 'relative',

    'img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      objectFit: 'cover',
      borderRadius: '1em',
    }
  },
  '.gallery-thumbnail': {
    marginTop: '2em'
  }
}));