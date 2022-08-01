import React from 'react';
import { CardBox } from '../CardBox';

import * as S from './styles';

type ContentTypes = {
  children: React.ReactNode;
  title: string;
  buttonAction?: JSX.Element;
};

export const Content = ({ children, title, buttonAction }: ContentTypes) => {
  return (
    <S.Wrapper>
      <S.TitlePage>
        <h2>{title}</h2>
        {buttonAction ? <div>{buttonAction}</div> : null}
      </S.TitlePage>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};
