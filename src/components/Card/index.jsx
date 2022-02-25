import React, {
  useState, useContext, createContext, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import {
  Author,
  Avatar,
  Body, Container, Date, Footer, Group, Media, Meta, Share, Title,
} from './styles/card';

const ShareContext = createContext();

const Card = ({ children }) => {
  const [showShare, setShowShare] = useState(false);

  const value = useMemo(() => ({ showShare, setShowShare }), []);

  return (
    <ShareContext.Provider value={value}>
      <Container>
        {children}
      </Container>
    </ShareContext.Provider>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Content = ({ body, title }) => (
  <Group margin="0 0 1rem" lgMargin="0 0 .5rem" padding=".25rem 2rem" lgPadding="0">
    <Title>{title}</Title>
    <Body>{body}</Body>
  </Group>
);

Card.Content.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Card.Group = ({
  children, margin, lgMargin, padding, lgPadding,
}) => (
  <Group margin={margin} lgMargin={lgMargin} padding={padding} lgPadding={lgPadding}>
    {children}
  </Group>
);

Card.Group.propTypes = {
  children: PropTypes.node.isRequired,
  margin: PropTypes.string,
  lgMargin: PropTypes.string,
  padding: PropTypes.string,
  lgPadding: PropTypes.string,
};

Card.Group.defaultProps = {
  margin: '0',
  lgMargin: '0',
  padding: '0',
  lgPadding: '0',
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

Card.Share = () => {
  const { setShowShare } = useContext(ShareContext);

  return (
    <Share type="button" onClick={setShowShare}>
      <img src="./images/icon-share.svg" alt="share" />
    </Share>
  );
};

Card.Meta = ({ children }) => (
  <Meta>
    {children}
  </Meta>
);

Card.Meta.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Avatar = ({ src }) => <Avatar src={src} />;

Card.Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};

Card.Author = ({ children }) => (
  <Author>
    {children}
  </Author>
);

Card.Author.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Date = ({ children }) => (
  <Date>
    {children}
  </Date>
);

Card.Date.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
