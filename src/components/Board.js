import React from 'react';
import Picture from './Picture';
import '../scss/style.scss';

const Board = ({ pictures = [], picturesClass = [], onClick = () => {} }) => (
    <div className="board">
      {pictures.map((c, index) =>
        <Picture key={index} picture={pictures[index]} pictureClass={picturesClass[index]} onClick={() => onClick(index)}/>)}  
    </div>
  );

export default Board;