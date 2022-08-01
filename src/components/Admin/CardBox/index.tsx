import React from 'react';

import * as S from './styles';

type CardBoxTypes = {
  children: React.ReactNode;
  title?: string;
};

export const CardBox = ({ children, title }: CardBoxTypes) => {
  return (
    <S.Wrapper>
      {title ? <S.Title>{title}</S.Title> : null}
      <S.CardBody>{children}</S.CardBody>
    </S.Wrapper>
  );
};
