import styled from '@emotion/styled';

export default styled.button(props => ({
  padding: '1.125em 0',
  fontSize: '1rem',
  fontWeight: 700,
  textAlign: 'center',
  backgroundColor: props.theme.color.orange,
  border: 'none',
  borderRadius: '.375em',
  color: 'white'
}));