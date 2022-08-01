import React, { useEffect, useState } from 'react';
import { useEventos } from 'hooks/use-eventos/use-eventos.hook';
import { Banners } from 'components/Banners';
import { TextWithImage } from 'components/TextWithImage';
import { Testimonials } from 'components/Testimonials';

import * as S from './styles';
import { Row, Col } from 'antd';
import { Container } from 'components/Container';
import { Card } from 'components/Card';
import { Event } from 'types/events';
import { HomeData } from 'types/home';
import theme from 'styles/theme';
import { HeadSection } from 'components/HeadSection';
import Link from 'next/link';

type HomeProps = {
  data: HomeData;
};

export const Home = ({ data }: HomeProps) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setEvents(data?.events);
  }, [data]);

  return (
    <S.Wrapper>
      <Banners autoplay banners={data?.sliders} />

      <TextWithImage
        data={data?.textandimages[0]}
        bgColor={theme.colors.primary}
        textColor={theme.colors.white}
      />

      <S.WrapperEvents>
        <Container>
          <HeadSection
            title="Últimos eventos"
            subtitle="Confira os últimos eventos na +AH Festas e eventos!"
          />
          <S.ContentEvents>
            <Row gutter={[24, 24]} style={{ width: '100%' }}>
              {events?.map((event: Event) => (
                <Col key={event.id} xs={12} md={8}>
                  <Card isLoading={false} item={event} />
                </Col>
              ))}
            </Row>
          </S.ContentEvents>
          <S.Vertodos>
            <Link href="/eventos">
              <a>Ver todos eventos</a>
            </Link>
          </S.Vertodos>
        </Container>
      </S.WrapperEvents>

      <TextWithImage
        data={data?.textandimages[1]}
        bgColor={theme.colors.primary}
        textColor={theme.colors.white}
      />

      <Testimonials data={data?.testimonials} />
    </S.Wrapper>
  );
};
