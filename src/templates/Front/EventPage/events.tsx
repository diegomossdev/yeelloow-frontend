import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { Card } from 'components/Card';
import { Container } from 'components/Container/styles';
import { HeadPage } from 'components/HeadPage';

import { Event } from 'types/events';
import * as S from './styles';

type EventsPageProps = {
  data: Event[];
};

export const EventsPage = ({ data }: EventsPageProps) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setEvents(data);
  }, [data]);

  return (
    <S.Wrapper>
      <HeadPage
        title={`Eventos`}
        subtitle={`Confira os últimos eventos na +AH Festas e eventos!`}
      />

      <Container>
        <Row gutter={[24, 24]} style={{ width: '100%' }}>
          {events.map((event: Event) => (
            <Col key={event.id} xs={12} md={8}>
              <Card isLoading={false} item={event} />
            </Col>
          ))}
        </Row>
      </Container>
    </S.Wrapper>
  );
};
