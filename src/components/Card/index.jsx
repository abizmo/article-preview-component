import React from 'react';
import PropTypes from 'prop-types';
import {
  Body, Container, Footer, Group, Media, Share, Title,
} from './styles/card';

const Card = ({ children }) => (
  <Container>
    {children}
  </Container>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Content = ({ body, title }) => (
  <Group noPaddingLaptop>
    <Title>{title}</Title>
    <Body>{body}</Body>
  </Group>
);

Card.Content.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Card.Group = ({ children }) => (
  <Group noMargin noMarginLaptop noPadding>
    {children}
  </Group>
);

Card.Group.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Media = ({ src }) => <Media src={src} />;

Card.Media.propTypes = {
  src: PropTypes.string.isRequired,
};

Card.Footer = ({ children }) => (
  <Footer>
    {children}
  </Footer>
);

Card.Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Share = () => (
  <Share type="button">
    <img src="./images/icon-share.svg" alt="share" />
  </Share>
);

export default Card;

/*
<Card>
  <Card.media src="" />
  <Card.group>
    <Card.content>
      <Card.title>
      <Card.body>
    <Card.Footer>
      <Card.meta>
        <Card.avatar>
        <Card.group>
          <Card.author>
          <Card.date>
      <Card.button>

*/
