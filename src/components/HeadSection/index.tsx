import React from 'react';

import * as S from './styles';

type HeadSectionProps = {
  title: string;
  subtitle?: string;
};

export const HeadSection = ({ title, subtitle }: HeadSectionProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {subtitle ? <S.SubTitle>{subtitle}</S.SubTitle> : null}
    </S.Wrapper>
  );
};
