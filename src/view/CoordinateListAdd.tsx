import React, { useCallback, useState } from 'react';
import { Coordinate } from '@/model/coordinate';

export interface CoordinateListAddProps {
  world: Coordinate['world'];
  onAdd: (newCoord: Coordinate) => void;
}

const CoordinateListAdd: React.FC<CoordinateListAddProps> = (props) => {
  const { world, onAdd } = props;
  const [coordinate, setCoord] = useState<Coordinate>({ x: 0, y: 0, z: 0, world });
  const handleConfirm = useCallback(() => {
    onAdd(coordinate);
    setCoord({ x: 0, y: 0, z: 0, world });
  }, [coordinate, onAdd, world]);

  const handleChange = useCallback((field: keyof Coordinate, value: string) => {
    setCoord({ ...coordinate, [field]: parseInt(value, 10) || 0 });
  }, [coordinate]);

  return <div className="portalator-coord-list-add">
    <input
      className="portalator-coord-list-add-input portalator-coord-list-add-input-x"
      type="number"
      value={coordinate.x}
      onChange={e => handleChange('x', e.target.value)}
    />
    <input
      className="portalator-coord-list-add-input portalator-coord-list-add-input-y"
      type="number"
      value={coordinate.y}
      onChange={e => handleChange('y', e.target.value)}
    />
    <input
      className="portalator-coord-list-add-input portalator-coord-list-add-input-z"
      type="number"
      value={coordinate.z}
      onChange={e => handleChange('z', e.target.value)}
    />
    <button
      className="portalator-coord-list-add-button-add"
      onClick={handleConfirm}
    >
      +
    </button>
  </div>;
};

export default CoordinateListAdd;
