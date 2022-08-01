import React, { useEffect, useState } from 'react';
import { EditorState } from 'draft-js';
import { EditorProps } from 'react-draft-wysiwyg';
import Dynamic from 'next/dynamic';
import { convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
const Editor = Dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import * as S from './styles';

type EditorWysiwyg = {
  htmlOnChange(html: string): void;
  textDefault?: string;
};

export const EditorWysiwyg = ({ htmlOnChange, textDefault }: EditorWysiwyg) => {
  var editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);

  useEffect(() => {
    const raw = convertToRaw(description.getCurrentContent());
    const json = JSON.stringify(raw);
    const html = draftToHtml(JSON.parse(json));

    htmlOnChange(html);
  }, [description]);

  useEffect(() => {
    if (textDefault) {
      const blocksFromHTML = convertFromHTML(textDefault);
      const contentDataState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );

      setDescription(EditorState.createWithContent(contentDataState));
    }
  }, [textDefault]);

  const setEditorState = (editorState: any) => {
    setDescription(editorState);
  };

  return (
    <S.WrapperEditor>
      <Editor
        editorState={description}
        toolbarClassName="toolbarEditor"
        wrapperClassName="wrapperEditor"
        editorClassName="editorEditor"
        onEditorStateChange={setEditorState}
        toolbar={{
          options: [
            'inline',
            'blockType',
            'fontSize',
            'list',
            'textAlign',
            'colorPicker',
            'link',
            'history',
          ],
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      />
    </S.WrapperEditor>
  );
};
