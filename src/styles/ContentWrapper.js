import styled from '@emotion/styled';

export default styled.section(props => ({
  margin: '1.5em',
  '> span': {
    fontSize: '.85rem',
    fontWeight: 700,
    color: 'hsl(26, 100%, 55%)',

    '~ h1': {
      margin: '.5em 0',
      fontSize: '1.675rem'
    },

    '~ p': {
      fontSize: '.95rem',
      fontWeight: 400,
      lineHeight: '1.5em'
    }
  },

  '.price': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '1.25em 0',
    '> div:first-of-type': {
      fontSize: '1.675rem',
      fontWeight: 700,
      display: 'flex',
      gap: '.6em',
      alignItems: 'center',

      'span': {
        backgroundColor: 'hsl(25, 100%, 94%)',
        color: 'hsl(26, 100%, 55%)',
        fontSize: '.95rem',
        padding: '0.25em .5em',
        borderRadius: '.5em'
      }
    },
    '> div:last-of-type': {
      fontSize: '1rem',
      fontWeight: 700,
      textDecorationLine: 'line-through'
    }
  },

  '.input': {
    minHeight: '3.375em',
    backgroundColor: 'hsl(223, 64%, 98%)',
    borderRadius: '.5em',
    padding: '0 1.5em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1rem',
    fontWeight: 700
  },

  '.btn': {
    margin: '1em 0',
    width: '100%',
    display: 'flex',
    gap: '1em',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));