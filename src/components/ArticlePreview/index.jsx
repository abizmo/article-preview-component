import React from 'react';

import Card from '../Card';

const body = 'Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.';
const title = 'Shift the overall look and feel by adding these wonderful touches to furniture in your home';

const ArticlePreview = () => (
  <Card>
    <Card.Media src="./images/drawers.jpg" />
    <Card.Group lgPadding="2rem 2.5rem 0 0">
      <Card.Content body={body} title={title} />
      <Card.Footer>
        <Card.Meta>
          <Card.Avatar src="./images/avatar-michelle.jpg" />
          <Card.Group>
            <Card.Author>
              Michelle Appleton
            </Card.Author>
            <Card.Date>
              28 Jun 2020
            </Card.Date>
          </Card.Group>
        </Card.Meta>
        <Card.Share />
      </Card.Footer>
    </Card.Group>
  </Card>
);

export default ArticlePreview;
