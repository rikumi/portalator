import React from 'react';

export interface SquareBlockProps {
  color?: string;
}

const SquareBlock: React.FC<SquareBlockProps> = ({ color }) => {
  return <div className="square-block" style={{
    flex: '1 1 0',
    backgroundColor: color ?? 'transparent',
    boxSizing: 'border-box',
    // border: color ? '1px solid rgba(255, 255, 255, .1)' : '1px solid transparent',
    boxShadow: color ? '0 1px 3px rgba(0, 0, 0, .5)' : 'none',
    // borderRadius: '2px',
    // margin: '2px',
  }}>
    <div className="square-block-supporter" style={{ paddingTop: '100%' }} />
  </div>;
};

export default SquareBlock;
