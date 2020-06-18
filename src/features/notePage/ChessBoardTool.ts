import { BlockTool, API, ToolConfig, BlockToolData } from '@editorjs/editorjs';
import { Chessground } from 'chessground';
import { Api as ChessgroundApi } from 'chessground/api';
import { DefaultConfig } from './DefaultConfig';

// import {
//   ConversionConfig,
//   SanitizerConfig,
// } from '@editorjs/editorjs/types/configs';

interface TestPluginToolData extends BlockToolData {
  url: string;
}

export default class ChessBoardTool implements BlockTool {
  private toolData: TestPluginToolData;

  private div = document.createElement('div');
  private api: ChessgroundApi | undefined;
  private fen = 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1';

  constructor({
    api,
    config,
    data,
  }: {
    api: API;
    config?: ToolConfig;
    data?: TestPluginToolData;
  }) {
    this.toolData = data || { url: '' };
  }

  static get toolbox() {
    return {
      title: 'ChessBoard',
      icon:
        '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
    };
  }

  render(): HTMLElement {
    // const board = Chessground(this.div, DefaultConfig);
    // const board = Chessground(this.div);
    return this.div;
  }

  rendered() {
    // const fen = 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1';
    // // const board = Chessground(this.div, DefaultConfig);
    // const board = Chessground(this.div, { fen: fen });
    setTimeout(() => {
      this.api = Chessground(this.div, { fen: this.fen });
    }, 1);
  }

  save(block: HTMLElement): TestPluginToolData {
    // const input = block as HTMLInputElement;
    // this.api = Chessground(this.div, { fen: this.fen });
    return {
      url: '',
    };
  }

  // validate(toolData: TestPluginToolData) {
  //   return Boolean(toolData.url.trim());
  // }
}
