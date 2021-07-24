import React, { useCallback } from 'react';
import { Coordinate } from '@/model/coordinate';
import CoordinateListItem from './CoordinateListItem';
import CoordinateListAdd from './CoordinateListAdd';

export interface CoordinateListProps {
  coordinateList: Coordinate[];
  world: Coordinate['world'];
  className?: string;
  onChange: (newCoordinates: Coordinate[]) => void;
}

const CoordinateList: React.FC<CoordinateListProps> = (props) => {
  const { coordinateList, className, world, onChange } = props;

  const handleChange = useCallback((index: number, coord: Coordinate) => {
    onChange(Object.assign(coordinateList.slice(), { [index]: coord }));
  }, [coordinateList, onChange]);

  const handleDelete = useCallback((index: number) => {
    onChange(coordinateList.filter((_, i) => i !== index));
  }, [coordinateList, onChange]);

  const handleAdd = useCallback((coord: Coordinate) => {
    onChange([...coordinateList, coord]);
  }, [coordinateList, onChange]);

  return <div className={`portalator-coord-list ${className}`}>
    <div className="portalator-coord-list-name">Portals in {world}</div>
    {coordinateList.map((coord, i) => (
      <CoordinateListItem
        coordinate={coord}
        onChange={coord => handleChange(i, coord)}
        onDelete={() => handleDelete(i)}
      />
    ))}
    <CoordinateListAdd world={world} onAdd={handleAdd} />
  </div>;
};

export default CoordinateList;
