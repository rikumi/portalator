import { Coordinate } from './model/coordinate';

const getOrCreateNearestPortal = (
  srcPortal: Coordinate,
  dstPortals: Coordinate[],
  world: Coordinate['world'],
): Coordinate => {
  const { x, y, z } = srcPortal;
  const conversionRatio = world === 'nether' ? 1 / 8 : 8;
  const horizontalDistance = world === 'nether' ? 16 : 128;
  const verticalDistance = world === 'nether' ? 128 : 256;
  const dstX = Math.floor(x * conversionRatio);
  const dstZ = Math.floor(z * conversionRatio);
  const candidatePortals = dstPortals.filter(portal => {
    return Math.abs(portal.x - dstX) <= horizontalDistance
      && Math.abs(portal.z - dstZ) <= horizontalDistance
      && Math.abs(portal.y - y) <= verticalDistance;
  });
  const getDistance = (portal: Coordinate) => {
    return Math.sqrt(((portal.x - dstX) ** 2) + ((portal.z - dstZ) ** 2) + ((portal.y - y) ** 2));
  };
  const [nearestPortal] = candidatePortals.sort((a, b) => getDistance(a) - getDistance(b));
  const targetPortal = nearestPortal ?? { x: dstX, y, z: dstZ, world, isGenerated: true };
  return targetPortal;
};

export const generateGraphData = (overworldPortals: Coordinate[], netherPortals: Coordinate[]) => {
  const vertices = [...overworldPortals, ...netherPortals];
  const edges: { from: number; to: number }[] = [];

  vertices.forEach((portal, i) => {
    if (portal.isGenerated) return;
    const nearest = getOrCreateNearestPortal(
      portal,
      portal.world === 'overworld' ? netherPortals : overworldPortals,
      portal.world === 'overworld' ? 'nether' : 'overworld'
    );
    if (!vertices.includes(nearest)) {
      vertices.push(nearest);
    }
    edges.push({ from: i, to: vertices.indexOf(nearest) });
  });

  return {
    nodes: vertices.map(({ x, y, z, world, isGenerated }, index) => {
      const ratio = world === 'overworld' ? 1 / 8 : 1;
      return ({
        id: `${index}`,
        title: isGenerated ? 'Generated' : `${x},${y},${z}`,
        x: Math.sqrt((x * x * ratio * ratio) + (z * z * ratio * ratio)) * 50,
        y: y + (world === 'overworld' ? -1000 : 0),
        type: world,
      });
    }),
    edges: edges.map(({ from, to }) => ({
      source: `${from}`,
      target: `${to}`,
      type: 'default',
    })),
  };
};
