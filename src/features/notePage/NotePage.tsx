import React from 'react';
import Editorjs from 'react-editor-js';
import EditorJS from '@editorjs/editorjs';

interface NotePageProps {}

export const NotePage: React.FC<NotePageProps> = ({}) => {
  let editor: EditorJS;

  async function save() {
    const saveData = await editor.save();
    console.log(saveData);
  }

  return (
    <>
      <Editorjs instanceRef={(instance) => (editor = instance)} />
      <button onClick={save}>Test</button>
    </>
  );
};
