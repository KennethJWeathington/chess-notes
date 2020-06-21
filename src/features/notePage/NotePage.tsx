import './styles/chessground.css';
import React, { useState } from 'react';
import Editorjs from 'react-editor-js';
import EditorJS from '@editorjs/editorjs';
import ChessBoardTool from './ChessBoardTool';
const Paragraph = require('@editorjs/paragraph');
const List = require('@editorjs/list');

interface NotePageProps {}

export const NotePage: React.FC<NotePageProps> = () => {
  const [editor, setEditor] = useState<EditorJS>();

  async function save() {
    try {
      if (editor) {
        const saveData = await editor.save();

        sessionStorage.setItem('testSaveData', JSON.stringify(saveData));
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
