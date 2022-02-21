import styled from 'styled-components';

export const Container = styled.div(({ theme }) => ({
  backgroundColor: theme.color['blue-100'],
  borderRadius: theme.sizes.br,
  overflow: 'hidden',
  width: theme.sizes.mobile,
  [theme.devices.laptop]: {
    width: theme.sizes.laptop,
  },
}));

export const Media = styled.div(({ src, theme }) => ({
  backgroundImage: `url('${src}')`,
  backgroundSize: 'cover',
  height: '12.5em',
  width: theme.full,
  [theme.devices.laptop]: {
    height: '17.813em',
    width: '17.5em',
  },
}));
