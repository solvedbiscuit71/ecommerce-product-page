import styled from '@emotion/styled';

export default styled.section(props => ({
  display: props.show ? 'block' : 'none',
  opacity: props.transition ? 1 : 0,
  transition: 'opacity 200ms ease-in-out',
  width: '22.5em',
  position: 'absolute',
  zIndex: 8,
  top: '4.75em',
  right: '.46785em',
  backgroundColor: 'white',
  borderRadius: '.675em',

  '> h2': {
    color: props.theme.text.bold,
    fontSize: '1.125rem',
    margin: 0,
    padding: '1.45em 1.33em',
    borderBottom: '1px solid hsla(0,0%,0%,0.125)'
  },

  '> div': {
    minHeight: '10.55em',
    display: 'grid',
    placeContent: props.isEmpty ? 'center' : '',
    fontSize: '1.125rem',
    fontWeight: 700,
  },
  '.cart': {
    margin: '1.45em 1.33em',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5em',

    '.cart-info': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      '> div': {
        display: 'flex',
        gap: '1em',
        'img': {
          width: '3.125em',
          height: '3.125em',
          borderRadius: '.375em'
        },

        '> div': {
          display: 'flex',
          flexDirection: 'column',
          gap: '.5em',
          'h3,p': {
            color: props.theme.text.normal,
            fontSize: '.9rem',
            fontWeight: 400,
            margin: 0,
            'span': {
              color: props.theme.text.bold,
              marginLeft: '.25em',
              fontWeight: 700
            }
          }
        }
      }
    }
  }
}))