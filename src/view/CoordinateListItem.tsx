import React, { useCallback } from 'react';
import { Coordinate } from '@/model/coordinate';

export interface CoordinateListItemProps {
  coordinate: Coordinate;
  onChange: (newCoord: Coordinate) => void;
  onDelete: () => void;
}

const CoordinateListItem: React.FC<CoordinateListItemProps> = (props) => {
  const { coordinate, onChange, onDelete } = props;

  const handleChange = useCallback((field: keyof Coordinate, value: string) => {
    onChange({ ...coordinate, [field]: parseInt(value, 10) || 0 });
  }, [coordinate, onChange]);

  return <div className="portalator-coord-list-item">
    <input
      className="portalator-coord-list-item-input portalator-coord-list-item-input-x"
      type="number"
      value={coordinate.x}
      onChange={e => handleChange('x', e.target.value)}
    />
    <input
      className="portalator-coord-list-item-input portalator-coord-list-item-input-y"
      type="number"
      value={coordinate.y}
      onChange={e => handleChange('y', e.target.value)}
    />
    <input
      className="portalator-coord-list-item-input portalator-coord-list-item-input-z"
      type="number"
      value={coordinate.z}
      onChange={e => handleChange('z', e.target.value)}
    />
    <button
      className="portalator-coord-list-item-button-delete"
      onClick={onDelete}
    >
      -
    </button>
  </div>;
};

export default CoordinateListItem;
