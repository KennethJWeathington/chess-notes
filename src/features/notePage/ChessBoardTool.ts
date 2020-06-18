import { BlockTool, API, ToolConfig, BlockToolData } from '@editorjs/editorjs';
import { Chessground } from 'chessground';
import { Config } from 'chessground/config';
import { Api as ChessgroundApi } from 'chessground/api';

interface ChessBoardToolData extends BlockToolData, Config {}

export default class ChessBoardTool implements BlockTool {
  private toolData: ChessBoardToolData | undefined;
  private div = document.createElement('div');
  private chessApi: ChessgroundApi | undefined;

  constructor({
    api,
    config,
    data,
  }: {
    api: API;
    config?: ToolConfig;
    data?: ChessBoardToolData;
  }) {
    this.toolData = data;
  }

  static get toolbox() {
    return {
      title: 'ChessBoard',
      icon:
        '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
    };
  }

  render(): HTMLElement {
    this.loadChessBoard();
    return this.div;
  }

  save(): ChessBoardToolData {
    return {
      fen: this.chessApi?.getFen() || '',
    };
  }

  loadChessBoard() {
    //Fix for loading order conflict with editorJS
    setTimeout(() => {
      this.chessApi = Chessground(this.div, this.toolData);
    }, 1);
  }
}