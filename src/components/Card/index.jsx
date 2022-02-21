import React from 'react';
import PropTypes from 'prop-types';
import { Container, Media } from './styles/card';

const Card = ({ children }) => (
  <Container>
    {children}
  </Container>
);

Card.Media = ({ src }) => <Media src={src} />;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Media.propTypes = {
  src: PropTypes.string.isRequired,
};

Card.Group.propTypes = {
  children: PropTypes.node.isRequired,
};

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
