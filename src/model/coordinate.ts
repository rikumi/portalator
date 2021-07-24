export interface Coordinate {
  x: number;
  y: number;
  z: number;
  world: 'overworld' | 'nether';
  isGenerated?: boolean;
}
