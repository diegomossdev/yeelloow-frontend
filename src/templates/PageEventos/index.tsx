import React, { useEffect, useState } from 'react';
import { Card } from 'components/Admin/Card';
import { Col, Row } from 'antd';

import { useEventos } from 'hooks/use-eventos/use-eventos.hook';

import * as S from './styles';
import { Event } from 'types/events';

export const PageEventos = () => {
  const { getEventos } = useEventos();
  const [loader, setLoader] = useState<boolean>(false);
  const [eventos, setEventos] = useState<Event[]>([]);
  const [errors, setErrors] = useState<string>('');

  const loadEventos = async () => {
    try {
      setLoader(false);
      const { data } = await getEventos({});

      setEventos(data?.events);
    } catch (error: any) {
      setErrors(error.message);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    loadEventos();
  }, []);

  const refreshList = () => {
    loadEventos();
  };

  return (
    <S.Wrapper>
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        {eventos.map((evento) => (
          <Col key={evento.id} xs={24} md={8}>
            <Card isLoading={loader} item={evento} refreshList={refreshList} />
          </Col>
        ))}
      </Row>
    </S.Wrapper>
  );
};
