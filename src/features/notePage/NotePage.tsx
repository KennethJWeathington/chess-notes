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

  const data = `{"time":1592409899548,"blocks":[{"type":"paragraph","data":{"text":"sdfsdf"}},{"type":"paragraph","data":{"text":"gggsdf"}},{"type":"board","data":{"url":"testURL"}}],"version":"2.18.0"}`;
  const testData = JSON.parse(data) as OutputData;
  const [editor, setEditor] = useState<EditorJS>();
  const [testState, setTestState] = useState<string>('Test');

  async function save() {
    setTestState('testing');

    if (editor) await editor.save();
    else throw new Error('Editor is null!');
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
