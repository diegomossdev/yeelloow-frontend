import React, { useEffect, useState } from 'react';
import { WhatsAppOutlined } from '@ant-design/icons';
import { Col, Row, Image } from 'antd';
import { Container } from 'components/Container';
import { HeadPage } from 'components/HeadPage';
import { CompanyData } from 'types/company';

import * as S from './styles';

type CompanyProps = {
  data: CompanyData;
};

export const QuemSomosPage = ({ data }: CompanyProps) => {
  const [whatsapp, setWhatsapp] = useState<string>('');

  useEffect(() => {
    const telefoneInfo = data?.informations?.find(
      (info) => info.key === 'telefone'
    );

    setWhatsapp(telefoneInfo?.value ? telefoneInfo.value : '');
  }, [data?.informations]);

  return (
    <>
      <HeadPage
        title={`Quem somos`}
        subtitle={`Confira um pocuo da nossa história e o que fazemos`}
      />

      <S.Wrapper>
        <Container>
          <Row gutter={[24, 24]} style={{ width: '100%' }}>
            <Col xs={24} md={24}>
              <S.TitleQs>Sobre nós</S.TitleQs>
              <S.TextQs
                dangerouslySetInnerHTML={{ __html: data?.page?.description }}
              />
            </Col>
            <Col xs={24} md={24}>
              <S.TitleQs>Fotos da empresa</S.TitleQs>

              <Row gutter={[24, 24]} style={{ width: '100%' }}>
                <Image.PreviewGroup>
                  {data?.images?.map((image) => (
                    <Col key={image.id} xs={12} md={8}>
                      <Image
                        width="100%"
                        src={`${process.env.APP_API_URL}/${image.path}`}
                        alt={`imagem - ${image.id}`}
                      />
                    </Col>
                  ))}
                </Image.PreviewGroup>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col xs={24} md={12}>
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
            </Col>
          </Row>
        </Container>
      </S.Wrapper>
    </>
  );
};
