import './styles/chessground.css';
import React, { useState } from 'react';
import Editorjs from 'react-editor-js';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import ChessBoardTool from './ChessBoardTool';
const Paragraph = require('@editorjs/paragraph');
const List = require('@editorjs/list');

interface NotePageProps {}

export const NotePage: React.FC<NotePageProps> = ({}) => {
  // let editor: EditorJS;

  // const data = `{"time":1592409899548,"blocks":[{"type":"paragraph","data":{"text":"sdfsdf"}},{"type":"paragraph","data":{"text":"gggsdf"}},{"type":"board","data":{"url":"testURL"}}],"version":"2.18.0"}`;
  const data =
    '{"time":1592493985004,"blocks":[{"type":"paragraph","data":{"text":"sdfsdf"}},{"type":"paragraph","data":{"text":"gggsdf"}},{"type":"board","data":{"fen":"r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R"}}],"version":"2.18.0"}';
  const testData = JSON.parse(data) as OutputData;
  const [editor, setEditor] = useState<EditorJS>();
  const [testState, setTestState] = useState<string>('Test');

  async function save() {
    setTestState('testing');

    try {
      if (editor) {
        const saveDate = await editor.save();
        console.log(JSON.stringify(saveDate));
      } else throw new Error('Editor is null!');
    } catch (error) {
      console.log(error);
    }
    // const saveDataJSON = JSON.stringify(saveData);
    // console.log(saveData);
    // console.log(saveDataJSON);
  }

  return (
    <>
      <Editorjs
        tools={{ paragraph: Paragraph, list: List, board: ChessBoardTool }}
        instanceRef={(instance) => setEditor(instance)}
        data={testData}
      />
      <button onClick={save}>{testState}</button>
    </>
  );
};
