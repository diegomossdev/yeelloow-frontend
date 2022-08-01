import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { Content } from 'components/Admin/Content';
import { BannerItem } from 'components/Admin/BannerItem';
import { PlusCircleOutlined } from '@ant-design/icons';

import { useSlider } from 'hooks/use-slider/use-slider.hook';

import * as S from './styles';

import Link from 'next/link';

export type Banner = {
  id: number;
  type: string;
  originalname: string;
  filename: string;
  path: string;
  link: string;
  size: string;
  createdAt: string;
  updatedAt: string;
};

export const PageBanners = () => {
  const { getBanners } = useSlider();
  const [banners, setBanners] = useState<Banner[]>([]);

  const loadBanners = async () => {
    const { data } = await getBanners();
    setBanners(data);
  };

  useEffect(() => {
    loadBanners();
  }, []);

  const buttonAction = (
    <Link href="/admin/adicionar-banner">
      <a>
        <PlusCircleOutlined />
        Adicionar banner
      </a>
    </Link>
  );

  const refreshList = () => {
    loadBanners();
  };

  return (
    <Content title="Banners" buttonAction={buttonAction}>
      <S.Wrapper>
        <Row gutter={[16, 16]} style={{ width: '100%' }}>
          {banners.map((banner) => (
            <Col key={banner.id} span={12}>
              <BannerItem banner={banner} refreshList={refreshList} />
            </Col>
          ))}
        </Row>
      </S.Wrapper>
    </Content>
  );
};
