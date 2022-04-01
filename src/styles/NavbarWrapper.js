import styled from '@emotion/styled';

export default styled.div(props => ({
  display: props.show ? 'block' : 'none',
  minWidth: '100vw',
  minHeight: '100vh',
  position: 'fixed',
  zIndex: 10,
  top: 0,
  left: 0,
  backgroundColor: 'hsla(0,0%,0%,.75)',
  div: {
    width: '15.625em',
    minHeight: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    paddingLeft: '1.5em',
    paddingTop: '1.5em',

    'ul': {
      listStyle: 'none',
      padding: 0,
      margin: '3.5em 0',
      display: 'flex',
      gap: '1.875em',
      flexDirection: 'column',
      'li': {
        fontSize: '1.125rem',
        fontWeight: 700
      }
    }
  }
}));