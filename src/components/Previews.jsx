import React from 'react';

import Preview from './Preview';
import './Previews.css';

const Previews = ({ tetrominoes }) => {
  // We want everything except the last one
  const previewTetrominoes = tetrominoes.slice(1 - tetrominoes.length).reverse();

  return (
    <div className="Previews-wrapper">
      {previewTetrominoes.map((tetromino, index) => (
        <Preview tetromino={tetromino} index={index} key={index} />
      ))}
    </div>
  );
};

export default React.memo(Previews);
