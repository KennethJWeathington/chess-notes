import './styles/chessground.css';
import React, { useState } from 'react';
import Editorjs from 'react-editor-js';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import ChessBoardTool from './ChessBoardTool';
const Paragraph = require('@editorjs/paragraph');
const List = require('@editorjs/list');

interface NotePageProps {}

export const NotePage: React.FC<NotePageProps> = ({}) => {
  // const data =
  //   '{"time":1592493985004,"blocks":[{"type":"paragraph","data":{"text":"sdfsdf"}},{"type":"paragraph","data":{"text":"gggsdf"}},{"type":"board","data":{"fen":"r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R"}}],"version":"2.18.0"}';
  const [editor, setEditor] = useState<EditorJS>();

  async function save() {
    try {
      if (editor) {
        const saveData = await editor.save();
        sessionStorage.setItem('testSaveData', JSON.stringify(saveData));
        // console.log(JSON.stringify(saveData));
      } else throw new Error('Editor is null!');
    } catch (error) {
      console.log(error);
    }
  }

  const testSaveString = sessionStorage.getItem('testSaveData');
  let testSaveData;
  if (testSaveString) testSaveData = JSON.parse(testSaveString);

  return (
    <>
      <Editorjs
        tools={{ paragraph: Paragraph, list: List, board: ChessBoardTool }}
        instanceRef={(instance) => setEditor(instance)}
        data={testSaveData}
      />
      <button onClick={save}>Save</button>
    </>
  );
};
