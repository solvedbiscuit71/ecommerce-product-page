import styled from '@emotion/styled';

export default styled.header(props => ({
  display: 'flex',
  justifyContent: 'space-between',
  minHeight: '4.25em',
  padding: '0 1.5em',
  '.flex': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1.5em'
  },
  '.cart-icon': {
    position: 'relative',
    'path': {
      fill: 'hsl(220, 13%, 13%)'
    },
    'span': {
      position: 'absolute',
      top: '-.5em',
      right: 0,
      fontSize: '.65rem',
      fontWeight: 700,
      color: 'white',
      backgroundColor: 'hsl(26, 100%, 55%)',
      padding: '0 0.625em',
      borderRadius: '.625em',
      transform: 'translateX(40%)'
    }
  },
  '.avatar': {
    width: '1.5em'
  },
  '.navbar': { display: 'none' }
}));