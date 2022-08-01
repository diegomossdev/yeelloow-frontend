import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Row, Col } from 'antd';
import { Container } from 'components/Container';

import * as S from './styles';
import { menuItems } from 'components/Menu';
import { WhatsAppOutlined } from '@ant-design/icons';
import { Information } from 'types/information';

type FooterProps = {
  informations: Information[];
};

export const Footer = ({ informations }: FooterProps) => {
  const [dataFooter, setDataFooter] = useState<Information[]>([]);
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [logo, setLogo] = useState<string>('');

  const loadInfos = () => {
    const infos: Information[] = [];

    informations?.map((item) => {
      if (item.key === 'primaryColor') {
        return;
      } else if (item.key === 'secondaryColor') {
        return;
      } else if (item.key === 'logo') {
        setLogo(item.path ? item.path : '');
        return;
      } else if (item.key === 'empresa') {
        setCompanyName(item.value);
        return;
      } else if (item.key === 'telefone') {
        setWhatsapp(item.value);
        return infos.push(item);
      } else {
        return infos.push(item);
      }
    });

    setDataFooter(infos);
  };

  useEffect(() => {
    loadInfos();
  }, [informations]);

  return (
    <>
      <S.Footer>
        <Container>
          <S.ContentFooter>
            <Row gutter={[24, 24]} style={{ width: '100%' }}>
              <Col xs={24} md={8}>
                <h4>{companyName}</h4>
                <ul className="first-menu">
                  {dataFooter.map((item) => (
                    <li key={item.id}>{item.value}</li>
                  ))}
                </ul>
              </Col>
              <Col xs={24} md={8}>
                <S.Infos>
                  <Link href="/">
                    <a className="logo">
                      <img
                        src={`${process.env.APP_API_URL}/${logo}`}
                        width={93}
                        height={65}
                        alt="mais ah festas e eventos"
                      />
                    </a>
                  </Link>
                  <a
                    href={`
                  https://api.whatsapp.com/send?phone=${whatsapp}&text=Ol%C3%A1%2C+estou+entrando+em+contato+pelo+site`}
                  >
                    <WhatsAppOutlined />
                    <span style={{ paddingLeft: 5 }}>Fale conosco!</span>
                  </a>
                </S.Infos>
              </Col>
              <Col xs={24} md={8}>
                <h4 className="last-menu">Menu</h4>
                <ul className="last-menu">
                  {menuItems.map((item) => (
                    <li key={item.key}>
                      <Link href={item.href}>
                        <a>{item.label}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </S.ContentFooter>
        </Container>
      </S.Footer>
      <S.Copy>
        <Container>
          <Row>
            <Col style={{ width: '100%' }}>
              <span>
                Copyright © 2022 EMPRESA, Todos os direitos reservados.
              </span>
            </Col>
          </Row>
        </Container>
      </S.Copy>
      <S.Yeelloow>
        <a href="https://yeelloow.com.br" target="_blank" rel="noreferrer">
          <Image
            src="/imgs/yeelloow.png"
            width={74}
            height={26}
            alt="yeelloow Soluções Digitais"
          />
        </a>
      </S.Yeelloow>
    </>
  );
};
