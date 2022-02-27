import styled from 'styled-components';

export const Container = styled.div(({ theme }) => ({
  backgroundColor: theme.color['blue-100'],
  borderRadius: theme.sizes.br,
  boxShadow: 'rgba(0 0 0 / 0.15) 12px 12px 25px -6px',
  // boxShadow: '20px 20px 30px rgb(0 0 0 / 15%)',
  // overflow: 'hidden',
  width: theme.sizes.mobile,
  [theme.devices.laptop]: {
    display: 'flex',
    width: theme.sizes.laptop,
  },
}));

export const Media = styled.img(({ theme }) => ({
  borderTopLeftRadius: theme.sizes.br,
  borderTopRightRadius: theme.sizes.br,
  marginBottom: '2rem',
  width: theme.sizes.full,
  [theme.devices.laptop]: {
    borderBottomLeftRadius: theme.sizes.br,
    borderTopLeftRadius: theme.sizes.br,
    borderTopRightRadius: 0,
    height: '17.5rem',
    marginBottom: '0',
    marginRight: '2.5rem',
    width: '17.8125rem',
  },
}));

export const Group = styled.div(({
  margin, lgMargin, padding, lgPadding, theme,
}) => ({
  flex: 1,
  margin,
  padding,
  [theme.devices.laptop]: {
    margin: lgMargin,
    padding: lgPadding,
  },
}));

export const Title = styled.h1(({ theme }) => ({
  color: theme.color['blue-900'],
  fontSize: theme.font.size.mobile.big,
  fontWeight: theme.font.weight.bold,
  letterSpacing: '.01em',
  lineHeight: '1.5em',
  marginBottom: '.75rem',
  [theme.devices.laptop]: {
    fontSize: theme.font.size.laptop.big,
    lineHeight: '1.4em',
  },
}));

export const Body = styled.p(({ theme }) => ({
  color: theme.color['blue-700'],
  fontSize: theme.font.size.mobile.normal,
  fontWeight: theme.font.weight.regular,
  letterSpacing: '.01em',
  lineHeight: '1.5384em',
  [theme.devices.laptop]: {
    fontSize: theme.font.size.laptop.normal,
  },
}));

export const Footer = styled.div(({ theme }) => ({
  alignItems: 'center',
  borderBottomLeftRadius: theme.sizes.br,
  borderBottomRightRadius: theme.sizes.br,
  display: 'flex',
  flexDirection: 'row',
  height: '4rem',
  justifyContent: 'space-between',
  padding: '0 2rem',
  position: 'relative',
  [theme.devices.laptop]: {
    padding: '0',
    '& #back': {
      display: 'none',
    },
  },
}));

export const Button = styled.button(({ theme }) => ({
  border: 'none',
  borderRadius: theme.sizes.brCircle,
  cursor: 'pointer',
  height: '2rem',
  width: '2rem',
  '&.active': {
    backgroundColor: theme.color['blue-700'],
    outline: 'none',
    '& path': {
      fill: theme.color['blue-100'],
    },
  },
}));

export const Meta = styled.div(({ theme }) => ({
  alignItems: 'center',
  borderRadius: theme.sizes.br,
  display: 'flex',
  gap: '1rem',
}));

export const Avatar = styled.img(({ theme }) => ({
  borderRadius: theme.sizes.brCircle,
  height: '2.5rem',
  widht: '2.5rem',
}));

export const Author = styled.h2(({ theme }) => ({
  color: theme.color['blue-900'],
  fontSize: theme.font.size.mobile.normal,
  fontWeight: theme.font.weight.bold,
  letterSpacing: '.01em',
  marginBottom: '.125rem',
}));

export const Date = styled.p(({ theme }) => ({
  color: theme.color['blue-700'],
  fontSize: theme.font.size.mobile.normal,
  fontWeight: theme.font.weight.regular,
  letterSpacing: '.01em',
}));

export const Share = styled.div(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.color['blue-900'],
  borderBottomLeftRadius: theme.sizes.br,
  borderBottomRightRadius: theme.sizes.br,
  display: 'flex',
  height: '0',
  justifyContent: 'space-between',
  left: 0,
  opacity: 0,
  padding: '0 2rem',
  position: 'absolute',
  top: 0,
  transition: 'opacity 300ms ease, height 0s ease 300ms',
  '&.show': {
    height: '4rem',
    opacity: 1,
    transition: 'opacity 300ms ease',
  },
  width: '100%',
  [theme.devices.laptop]: {
    borderRadius: theme.sizes.br,
    left: '50%',
    top: '-110%',
    transform: 'translateX(15%)',
    width: 'initial',
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: '-20px',
      left: '50%',
      transform: 'translateX(-10px)',
      width: '0',
      height: '0',
      borderLeft: '20px solid transparent',
      borderRight: '20px solid transparent',
      borderTop: `20px solid ${theme.color['blue-900']}`,
    },
  },
}));

export const Icon = styled.img`
  color: theme.color['blue-300'],
`;

export const Label = styled.p(({ theme }) => ({
  color: theme.color['blue-500'],
  display: 'inline',
  fontSize: theme.font.size.mobile.normal,
  fontWeight: theme.font.weight.regular,
  letterSpacing: '0.38em',
  textTransform: 'uppercase',
}));
