import { initial } from 'chessground/fen';
import { Config } from 'chessground/config';

export const DefaultConfig: Config = {
  fen: initial,
  orientation: 'white',
  turnColor: 'white',
  coordinates: true,
  autoCastle: true,
  viewOnly: false,
  disableContextMenu: false,
  resizable: true,
  addPieceZIndex: false,
  highlight: {
    lastMove: true,
    check: true,
  },
  animation: {
    enabled: true,
    duration: 200,
  },
  movable: {
    free: true,
    color: 'both',
    showDests: true,
    events: {},
    rookCastle: true,
  },
  premovable: {
    enabled: true,
    showDests: true,
    castle: true,
    events: {},
  },
  predroppable: {
    enabled: false,
    events: {},
  },
  draggable: {
    enabled: true,
    distance: 3,
    autoDistance: true,
    centerPiece: true,
    showGhost: true,
    deleteOnDropOff: false,
  },
  selectable: {
    enabled: true,
  },
  events: {},
  drawable: {
    enabled: true, // can draw
    visible: true, // can view
    eraseOnClick: true,
    shapes: [],
    autoShapes: [],
    brushes: [
      { key: 'g', color: '#15781B', opacity: 1, lineWidth: 10 },
      { key: 'r', color: '#882020', opacity: 1, lineWidth: 10 },
      { key: 'b', color: '#003088', opacity: 1, lineWidth: 10 },
      { key: 'y', color: '#e68f00', opacity: 1, lineWidth: 10 },
      { key: 'pb', color: '#003088', opacity: 0.4, lineWidth: 15 },
      { key: 'pg', color: '#15781B', opacity: 0.4, lineWidth: 15 },
      { key: 'pr', color: '#882020', opacity: 0.4, lineWidth: 15 },
      { key: 'pgr', color: '#4a4a4a', opacity: 0.35, lineWidth: 15 },
    ],
    pieces: {
      baseUrl: 'https://lichess1.org/assets/piece/cburnett/',
    },
  },
};
