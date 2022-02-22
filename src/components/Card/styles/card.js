import styled from 'styled-components';

export const Container = styled.div(({ theme }) => ({
  backgroundColor: theme.color['blue-100'],
  borderRadius: theme.sizes.br,
  overflow: 'hidden',
  width: theme.sizes.mobile,
  [theme.devices.laptop]: {
    display: 'flex',
    width: theme.sizes.laptop,
  },
}));

export const Media = styled.div(({ src, theme }) => ({
  backgroundImage: `url('${src}')`,
  backgroundSize: 'cover',
  height: '12.5em',
  marginBottom: '2em',
  width: theme.full,
  [theme.devices.laptop]: {
    height: '17.8125em',
    marginBottom: '0',
    marginRight: '2.5em',
    width: '17.5em',
  },
}));

export const Group = styled.div(({
  noMargin, noMarginLaptop, noPadding, noPaddingLaptop, theme,
}) => ({
  flex: 1,
  marginBottom: noMargin ? 0 : '1em',
  padding: noPadding ? 0 : '.25em 2em',
  [theme.devices.laptop]: {
    marginBottom: noMarginLaptop ? 0 : '.5em',
    padding: noPaddingLaptop ? 0 : '2em 2.5em 0 0',
  },
}));

export const Title = styled.h1(({ theme }) => ({
  fontSize: theme.font.size.mobile.big,
  fontWeight: theme.font.weight.bold,
  letterSpacing: '.01em',
  lineHeight: '1.5em',
  marginBottom: '.75em',
  [theme.devices.laptop]: {
    fontSize: theme.font.size.laptop.big,
    lineHeight: '1.4em',
    marginBottom: '.6em',
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
  height: '2em',
  width: '2em',
}));
