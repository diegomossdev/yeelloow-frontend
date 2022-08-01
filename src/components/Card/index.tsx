import React, { useState } from 'react';
import Link from 'next/link';
import { Card as CardAntd, Skeleton } from 'antd';

import * as S from './styles';
const { Meta } = CardAntd;

import { Event } from 'types/events';

type CardTypes = {
  isLoading: boolean;
  item: Event;
};

export const Card = ({ isLoading, item }: CardTypes) => {
  const actionButton = () => {
    return (
      <Link href={`/evento/${item.id}`}>
        <a style={{ color: '#34ccf5' }}>Ver evento</a>
      </Link>
    );
  };

  return (
    <Link href={`/evento/${item.id}`}>
      <a>
        <S.Card
          hoverable
          loading={isLoading}
          style={{ width: '100%' }}
          cover={
            <img
              alt="imagem do evento"
              src={`${process.env.APP_API_URL}/${item.coverimg}`}
            />
          }
          actions={[actionButton()]}
        >
          <Skeleton loading={isLoading} avatar active>
            <Meta title={item.title} description={item.subtitle} />
          </Skeleton>
        </S.Card>
      </a>
    </Link>
  );
};
