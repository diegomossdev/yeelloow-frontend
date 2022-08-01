import Image from 'next/image';
import React from 'react';
import { Testimonial as TestimonialType } from 'types/testimonial';

import * as S from './styles';

type TestimonialProps = {
  data: TestimonialType;
};

export const Testimonial = ({ data }: TestimonialProps) => {
  return (
    <S.Wrapper>
      <S.Text>
        <S.TextContent>{data.text}</S.TextContent>
      </S.Text>
      <S.Image>
        <img
          src={`${process.env.APP_API_URL}/${data.path}`}
          alt={`Depoimento cliente ${data.author}`}
        />
      </S.Image>
      <S.Name>{data.author}</S.Name>
      <S.Company>{data.company}</S.Company>
    </S.Wrapper>
  );
};
