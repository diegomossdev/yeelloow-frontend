import React from 'react';
import { Col, Row } from 'antd';
import { Container } from 'components/Container/styles';

import * as S from './styles';

import { TextAndImageData } from 'types/textandimages';

type TextAndImageProps = {
  data: TextAndImageData;
  bgColor?: string;
  textColor?: string;
};

export const TextWithImage = ({
  data,
  bgColor,
  textColor,
}: TextAndImageProps) => {
  return (
    <S.Wrapper bgColor={bgColor}>
      <Container>
        <Row>
          <Col span={12}>
            <S.Text
              textColor={textColor}
              dangerouslySetInnerHTML={{ __html: data.text }}
            />
          </Col>
          <Col span={12}>
            <S.Image>
              <img
                alt="imagem"
                src={`${process.env.APP_API_URL}/${data.path}`}
              />
            </S.Image>
          </Col>
        </Row>
      </Container>
    </S.Wrapper>
  );
};
