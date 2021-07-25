import React from 'react';
import B from './SquareBlock';
import R from './SquareBlockRow';

const NekoHead: React.FC = () => {
  return <div className="neko-head" style={{ position: 'absolute', left: '0', right: '0', zIndex: -1, pointerEvents: 'none' }}>
    <R><B/><B/><B color="#312B25"/><B color="#2A2622"/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B color="#292522"/><B color="#332D27"/><B/><B/></R>
    <R><B/><B color="#342E28"/><B color="#BC3F4F"/><B color="#AA3A48"/><B color="#2F2922"/><B color="#292522"/><B/><B/><B color="#1C1B1A"/><B color="#191818"/><B color="#161717"/><B color="#151517"/><B/><B/><B color="#191816"/><B color="#1F1B1B"/><B color="#862E3D"/><B color="#AC3B4A"/><B color="#2E2923"/><B/></R>
    <R><B/><B color="#242321"/><B color="#8A3042"/><B color="#812F40"/><B color="#7F2D3F"/><B color="#842D3D"/><B color="#1F1D1C"/><B color="#1D1B1A"/><B color="#1A1818"/><B color="#161717"/><B color="#151517"/><B color="#151516"/><B color="#171818"/><B color="#1A1818"/><B color="#66242F"/><B color="#732835"/><B color="#822C3A"/><B color="#882F3E"/><B color="#24221F"/><B/></R>
    <R><B/><B/><B color="#1E1E1E"/><B color="#5C2432"/><B color="#1B1B1B"/><B color="#1B1A18"/><B/><B color="#191818"/><B color="#151517"/><B color="#141515"/><B color="#141415"/><B color="#161517"/><B color="#181818"/><B/><B color="#191818"/><B color="#191818"/><B color="#6C2532"/><B color="#1E1D1A"/><B/><B/></R>
    <R><B/><B/><B color="#1F1E1E"/><B color="#201E1E"/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B color="#23201D"/><B color="#1C1A18"/><B/><B/></R>
    <R><B/><B/><B color="#1D1D1D"/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B color="#2D2823"/><B/><B/></R>
    <R><B/><B color="#2F2B23"/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B/><B color="#292520"/><B/></R>
  </div>;
};

export default NekoHead;
