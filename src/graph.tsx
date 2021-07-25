import React from 'react';

const GraphConfig = {
  NodeTypes: {
    overworld: {
      typeText: 'Overworld',
      shapeId: '#overworld', // relates to the type property of a node
      shape: (
        <symbol viewBox="0 0 100 100" id="overworld" key="0">
          <circle cx="50" cy="50" r="45"></circle>
        </symbol>
      ),
    },
    nether: {
      typeText: 'Nether',
      shapeId: '#nether', // relates to the type property of a node
      shape: (
        <symbol viewBox="0 0 100 100" id="nether" key="0">
          <circle cx="50" cy="50" r="45"></circle>
        </symbol>
      ),
    },
  },
  NodeSubtypes: {},
  EdgeTypes: {
    default: {
      shapeId: '#default',
      shape: (
        <symbol viewBox="0 0 50 50" id="default" key="0"></symbol>
      ),
    },
  },
};

export default GraphConfig;
