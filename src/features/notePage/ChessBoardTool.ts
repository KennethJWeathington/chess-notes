import { BlockTool, API, ToolConfig, BlockToolData } from '@editorjs/editorjs';
import { Chessground } from 'chessground';
import { Config } from 'chessground/config';
import { Api as ChessgroundApi } from 'chessground/api';
import { removeUndefinedProperties } from '../../utils';
import { boardImage } from './images/svg';

interface ChessBoardToolData extends BlockToolData, Config {}

const defaultBoardSettings: Config = {
  animation: { enabled: true, duration: 500 },
};

const defaultMenuItemLength = 14;
const defaultMenuItemClasses = ['ce-settings__button', 'ce-tune-move-down'];

export default class ChessBoardTool implements BlockTool {
  private api: API | undefined;
  private toolData: ChessBoardToolData | undefined;
  private container = document.createElement('div');
  private chessApi: ChessgroundApi | undefined;
  private toolSettingsMenu = [
    {
      icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>`,
      tooltip: 'Swap sides',
      action: () => this.swapBoardOrientation(),
    },
  ];

  constructor({
    api,
    config,
    data,
  }: {
    api: API;
    config?: ToolConfig;
    data?: ChessBoardToolData;
  }) {
    this.api = api;
    this.toolData = data;
  }

  static get toolbox() {
    return {
      title: 'ChessBoard',
      // icon:
      //   '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
      icon: boardImage,
    };
  }

  render(): HTMLElement {
    return this.container;
  }

  rendered() {
    //Fix for loading order conflict with editorJS
    setTimeout(() => {
      this.loadChessBoard();
    }, 1);
  }

  renderSettings() {
    const wrapper = document.createElement('div');

    this.toolSettingsMenu.forEach((setting) => {
      wrapper.appendChild(this.createMenuItem(setting));
    });

    return wrapper;
  }

  createMenuItem({
    icon,
    tooltip,
    action,
  }: {
    icon: string;
    tooltip: string;
    action: () => void;
  }): HTMLElement {
    const menuItem = document.createElement('div');
    menuItem.classList.add(...defaultMenuItemClasses);

    const iconElement = document.createElement('div');
    iconElement.innerHTML = icon;
    iconElement.setAttribute('width', `${defaultMenuItemLength}px`);
    iconElement.setAttribute('height', `${defaultMenuItemLength}px`);
    menuItem.appendChild(iconElement);

    menuItem.addEventListener('click', action);
    this.api?.tooltip.onHover(menuItem, tooltip);
    return menuItem;
  }

  save(): ChessBoardToolData {
    return this.getStateAsConfig();
  }

  loadChessBoard() {
    const config: Config = { ...defaultBoardSettings, ...this.toolData };
    this.chessApi = Chessground(this.container, config);
  }

  swapBoardOrientation() {
    this.chessApi?.toggleOrientation();
  }

  getStateAsConfig(): Config {
    const state = this.chessApi?.state;
    const config: Config = {
      fen: this.chessApi?.getFen(),
      orientation: state?.orientation,
      turnColor: state?.turnColor,
      lastMove: state?.lastMove,
      selected: state?.selected,
      coordinates: state?.coordinates,
      viewOnly: state?.viewOnly,
      addPieceZIndex: undefined,
    };

    const filteredConfig = removeUndefinedProperties(config);
    return filteredConfig;
  }
}
