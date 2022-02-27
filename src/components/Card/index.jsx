import React, {
  useState, useContext, createContext,
} from 'react';
import PropTypes from 'prop-types';
import {
  Author,
  Avatar,
  Body, Container, Date, Footer, Group, Media, Meta, Button, Title, Share, Icon, Label,
} from './styles/card';
import { ReactComponent as IconShare } from '../../assets/icon-share.svg';

const ShareContext = createContext();

const Card = ({ children }) => {
  const [showShare, setShowShare] = useState(false);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { showShare, setShowShare };

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

Card.Footer = ({ children }) => {
  const { showShare, setShowShare } = useContext(ShareContext);

  return (
    <Footer>
      {children}
      <Share className={showShare && 'show'}>
        <Group style={{
          alignItems: 'center',
          display: 'flex',
          gap: '1.25rem',
        }}
        >
          <Label>Share</Label>
          <Group style={{ display: 'flex', gap: '1rem' }}>
            <Icon src="./images/icon-twitter.svg" />
            <Icon src="./images/icon-facebook.svg" />
            <Icon src="./images/icon-pinterest.svg" />
          </Group>
        </Group>
        <Button id="back" type="button" onClick={() => setShowShare(false)}>
          <img src="./images/icon-share.svg" alt="share" />
        </Button>
      </Share>
    </Footer>
  );
};

Card.Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Button = () => {
  const { showShare, setShowShare } = useContext(ShareContext);

  return (
    <Button className={showShare && 'active'} type="button" onClick={() => setShowShare((prev) => setShowShare(!prev))}>
      <IconShare />
    </Button>
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
