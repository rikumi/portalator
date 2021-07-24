import React, { useMemo, useState } from 'react';
import { generateGraphData } from './algo';
import { Coordinate } from './model/coordinate';
import CoordinateList from './view/CoordinateList';

const Root: React.FC = () => {
  const [overworldCoords, setOverworldCoords] = useState<Coordinate[]>([]);
  const [netherCoords, setNetherCoords] = useState<Coordinate[]>([]);
  const graphData = useMemo(() => generateGraphData(overworldCoords, netherCoords), [overworldCoords, netherCoords]);

  return <div className="portalator">
    <div className="portalator-top">
      <CoordinateList
        className="portalator-coord-list portalator-coord-list-overworld"
        world="overworld"
        coordinateList={overworldCoords}
        onChange={setOverworldCoords}
      />
      <CoordinateList
        className="portalator-coord-list portalator-coord-list-nether"
        world="nether"
        coordinateList={netherCoords}
        onChange={setNetherCoords}
      />
    </div>
    <div className="portalator-bottom">
      <pre>
        {JSON.stringify(graphData, null, 4)}
      </pre>
    </div>
  </div>;
};

export default Root;
