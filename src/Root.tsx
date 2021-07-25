import React, { useEffect, useMemo, useState } from 'react';
import { GraphView } from 'react-digraph';
import { generateGraphData } from './algo';
import GraphConfig from './graph';
import { usePersistState } from './hooks';
import { Coordinate } from './model/coordinate';
import CoordinateList from './view/CoordinateList';
import NekoHead from './view/NekoHead';

const Root: React.FC = () => {
  const [overworldCoords, setOverworldCoords] = usePersistState<Coordinate[]>('portalator-coords-overworld', []);
  const [netherCoords, setNetherCoords] = usePersistState<Coordinate[]>('portalator-coords-nether', []);
  const { nodes, edges } = useMemo(() => {
    return generateGraphData(overworldCoords, netherCoords);
  }, [overworldCoords, netherCoords]);

  return <div className="portalator">
    <NekoHead />
    <div className="portalator-title">Portalator</div>
    <div className="portalator-intro">Portalator is a Minecraft helper app that shows teleporting relations between all of your portals. This is helpful when you already have a bunch of portals and is about to build a pair of new portals but don't want to confuse them with existing ones.</div>
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
      <GraphView nodeKey="id" nodes={nodes} edges={edges} nodeTypes={GraphConfig.NodeTypes} nodeSubtypes={GraphConfig.NodeSubtypes} edgeTypes={GraphConfig.EdgeTypes}/>
    </div>
  </div>;
};

export default Root;
