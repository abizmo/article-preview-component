import React from 'react';

import Card from '../Card';

const body = 'Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.';
const title = 'Shift the overall look and feel by adding these wonderful touches to furniture in your home';

const ArticlePreview = () => (
  <Card>
    <Card.Media src="./images/drawers.jpg" />
    <Card.Group>
      <Card.Content body={body} title={title} />
      <Card.Footer>
        <h1>Meta</h1>
        <Card.Share />
      </Card.Footer>
    </Card.Group>
  </Card>
);

// const ArticlePreview = () => (
//   <div className="card">
//     <div className="card-media" role="img" />
//     <div>
//       <div className="card-content">
//         <h1>
//         </h1>
//         <p>
//         </p>
//       </div>
//       <div className="card-footer">
//         <div className="card-data">
//           <div className="card-avatar" role="img" />
//           <div>
//             <p className="name">
//               Michelle Appleton
//             </p>
//             <p className="date">
//               28 Jun 2020
//             </p>
//           </div>
//         </div>
//         <button type="button">S</button>
//       </div>
//     </div>
//   </div>
// );

export default ArticlePreview;
