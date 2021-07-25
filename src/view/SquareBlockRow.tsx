import React from 'react';

const SquareBlockRow: React.FC = ({ children }) => {
  return <div className="square-block-row" style={{
    display: 'flex',
    flexDirection: 'row',
  }}>{ children }</div>;
};

export default SquareBlockRow;
