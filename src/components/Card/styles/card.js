import styled from 'styled-components';

export const Container = styled.div(({ theme }) => ({
  backgroundColor: theme.color['blue-100'],
  borderRadius: theme.sizes.br,
  boxShadow: 'rgba(0 0 0 / 0.15) 12px 12px 25px -6px',
  // boxShadow: '20px 20px 30px rgb(0 0 0 / 15%)',
  overflow: 'hidden',
  width: theme.sizes.mobile,
  [theme.devices.laptop]: {
    display: 'flex',
    width: theme.sizes.laptop,
  },
}));

export const Media = styled.img(({ theme }) => ({
  marginBottom: '2rem',
  width: theme.sizes.full,
  [theme.devices.laptop]: {
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
  fontSize: theme.font.size.mobile.normal,
  fontWeight: theme.font.weight.regular,
  letterSpacing: '.03em',
  lineHeight: '1.5384em',
  [theme.devices.laptop]: {
    fontSize: theme.font.size.laptop.normal,
  },
}));

export const Footer = styled.div(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '.75rem 2rem',
  [theme.devices.laptop]: {
    padding: '.75rem 0',
  },
}));

export const Share = styled.button(({ theme }) => ({
  border: 'none',
  borderRadius: theme.sizes.brCircle,
  height: '2rem',
  width: '2rem',
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
  fontSize: theme.font.size.mobile.normal,
  fontWeight: theme.font.weight.bold,
  letterSpacing: '.01em',
  marginBottom: '.125rem',
}));

export const Date = styled.p(({ theme }) => ({
  fontSize: theme.font.size.mobile.normal,
  fontWeight: theme.font.weight.regular,
  letterSpacing: '.01em',
}));
