import { Container } from 'components/Container/styles';
import { HeadPage } from 'components/HeadPage';
import React from 'react';
import { Event } from 'types/events';
import { Col, Image, Row } from 'antd';

import * as S from './styles';
import { WhatsAppOutlined } from '@ant-design/icons';

type EventPageProps = {
  data: Event;
  whatsapp: string;
};

export const EventPage = ({ data, whatsapp }: EventPageProps) => {
  return (
    <>
      <HeadPage
        title={`Evento ${data?.title}`}
        subtitle={`${data?.subtitle}`}
      />
      <S.Wrapper>
        <Container>
          <S.ContentEvent>
            <div>
              <Image
                width="100%"
                src={`${process.env.APP_API_URL}/${data?.coverimg}`}
                alt={data?.title}
              />
            </div>

            <S.Description>
              <strong>{`Sobre o evento ${data?.title}`}</strong>
              <span dangerouslySetInnerHTML={{ __html: data?.description }} />
            </S.Description>

            <S.TitlePhotos>
              <span>Fotos do evento</span>
            </S.TitlePhotos>
            {data?.photos?.length ? (
              <Row gutter={[24, 24]} style={{ width: '100%' }}>
                <Image.PreviewGroup>
                  {data?.photos?.map((photo) => (
                    <Col key={photo.id} xs={12} md={8}>
                      <Image
                        width="100%"
                        src={`${process.env.APP_API_URL}/${photo.path}`}
                        alt={`${data?.title}-${photo.id}`}
                      />
                    </Col>
                  ))}
                </Image.PreviewGroup>
              </Row>
            ) : (
              <div>Sem imagens deste evento.</div>
            )}

            <S.CallUs>
              <strong>Quer fazer seu evento?</strong>
              <span>Chame no whatsapp e alinhe os detalhes!</span>
              <S.Infos>
                <a
                  href={`
                  https://api.whatsapp.com/send?phone=${whatsapp}&text=Ol%C3%A1%2C+estou+entrando+em+contato+pelo+site`}
                >
                  <WhatsAppOutlined />
                  <span style={{ paddingLeft: 5 }}>Fale conosco!</span>
                </a>
              </S.Infos>
            </S.CallUs>
          </S.ContentEvent>
        </Container>
      </S.Wrapper>
    </>
  );
};
