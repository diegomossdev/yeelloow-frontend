import { Container } from 'components/Container/styles';
import React from 'react';

import * as S from './styles';

type HeadPageProps = {
  title: string;
  subtitle: string;
};

export const HeadPage = ({ title, subtitle }: HeadPageProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </Container>
    </S.Wrapper>
  );
};
