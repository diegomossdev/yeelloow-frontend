import React from 'react';
import Link from 'next/link';
import { Carousel } from 'antd';
import { SliderData } from 'types/slider';

type BannersProps = {
  banners: SliderData[];
  autoplay: boolean;
};

export const Banners = ({ banners, autoplay }: BannersProps) => {
  return (
    <Carousel autoplay={autoplay}>
      {banners.map((banner) => (
        <img
          key={banner.id}
          alt="slider banner"
          src={`${process.env.APP_API_URL}/${banner.path}`}
        />
      ))}
    </Carousel>
  );
};
