import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { Container } from 'components/Container/styles';
import { HeadPage } from 'components/HeadPage';
import { ContactData } from 'types/contact';

import * as S from './styles';
import { Information } from 'types/information';
import { WhatsAppOutlined } from '@ant-design/icons';

type ContatoPageProps = {
  data: ContactData;
};

export const ContatoPage = ({ data }: ContatoPageProps) => {
  const [dataPage, setDataPage] = useState<Information[]>([]);
  const [whatsapp, setWhatsapp] = useState<string>('');

  const loadInfos = () => {
    const infos: Information[] = [];

    data?.informations?.map((item) => {
      if (item.key === 'primaryColor') {
        return;
      } else if (item.key === 'secondaryColor') {
        return;
      } else if (item.key === 'logo') {
        return;
      } else if (item.key === 'telefone') {
        setWhatsapp(item.value);
        return infos.push(item);
      } else {
        return infos.push(item);
      }
    });

    setDataPage(infos);
  };

  useEffect(() => {
    loadInfos();
  }, [data]);

  return (
    <>
      <HeadPage
        title={`Contato`}
        subtitle={`Veja nossos contatos, tire dúvidas ou chame no whats!`}
      />

      <S.Wrapper>
        <Container>
          <Row gutter={[24, 24]} style={{ width: '100%' }}>
            <Col xs={24} md={12}>
              <S.TitleSection> Informações</S.TitleSection>
              <S.List>
                {dataPage.map((item) => (
                  <li key={item.id}>
                    <S.TitleInfo>
                      <span>{item.key}</span>
                    </S.TitleInfo>
                    <S.ValueInfo>{item.value}</S.ValueInfo>
                  </li>
                ))}
                <S.LiWhats key="02928290192921">
                  <S.TitleInfo>
                    <span>Chame no Whatsapp</span>
                  </S.TitleInfo>
                  <a
                    href={`
                  https://api.whatsapp.com/send?phone=${whatsapp}&text=Ol%C3%A1%2C+estou+entrando+em+contato+pelo+site`}
                  >
                    <WhatsAppOutlined />
                    <span style={{ paddingLeft: 5 }}>Fale conosco!</span>
                  </a>
                </S.LiWhats>
              </S.List>
            </Col>
            <Col xs={24} md={12}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.8974043423386!2d-51.14015168393688!3d-29.722730982000446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95194289d0d55dc5%3A0x2330a72a46590472!2sR.%20Primeiro%20de%20Mar%C3%A7o%2C%204441%20-%20Centro%2C%20Novo%20Hamburgo%20-%20RS%2C%2093410-175!5e0!3m2!1spt-BR!2sbr!4v1658865287373!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                loading="lazy"
                style={{ border: 'none' }}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </S.Wrapper>
    </>
  );
};
