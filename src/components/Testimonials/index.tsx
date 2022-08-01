import React from 'react';
import { Row, Col } from 'antd';
import { HeadSection } from 'components/HeadSection';
import { Testimonial } from 'components/Testimonial';

import * as S from './styles';
import { Container } from 'components/Container';
import { Testimonial as TestimonialsType } from 'types/testimonial';

type TestimonialsProps = {
  data: TestimonialsType[];
};

export const Testimonials = ({ data }: TestimonialsProps) => {
  return (
    <S.Wrapper>
      <HeadSection title="Depoimentos" subtitle="Confira o que falam de nós" />

      <Container>
        <S.Content>
          <Row gutter={[24, 24]} style={{ width: '100%' }}>
            {data?.length ? (
              data?.map((item) => (
                <Col key={item.id} xs={24} md={8}>
                  <Testimonial data={item} />
                </Col>
              ))
            ) : (
              <div>Sem depoimentos no momento.</div>
            )}
          </Row>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
};
