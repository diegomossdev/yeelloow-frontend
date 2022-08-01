import React from 'react';
import Link from 'next/link';
import { Col, Row } from 'antd';
import { Container } from 'components/Container/styles';
import { Menu } from 'components/Menu';

import * as S from './styles';

type HeaderProps = {
  logo: string;
};

export const Header = ({ logo }: HeaderProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Row>
          <Col span={6}>
            <S.Logo>
              <Link href="/">
                <a>
                  <img
                    src={`${process.env.APP_API_URL}/${logo}`}
                    width={93}
                    height={65}
                    alt="mais ah festas e eventos"
                  />
                </a>
              </Link>
            </S.Logo>
          </Col>
          <Col span={18}>
            <Menu />
          </Col>
        </Row>
      </Container>
    </S.Wrapper>
  );
};
