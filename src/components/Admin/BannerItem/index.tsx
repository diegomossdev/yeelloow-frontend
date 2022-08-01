import React, { useState } from 'react';
import Image from 'next/image';
import { useSlider } from 'hooks/use-slider/use-slider.hook';

import { message } from 'antd';
import { Modal } from 'components/Admin/Modal';
import { Banner } from 'templates/PageBanners';
import { Button } from 'components/Button';

import { DeleteOutlined } from '@ant-design/icons';

import * as S from './styles';

export type BannerItemTypes = {
  banner: Banner;
  refreshList: any;
};

export const BannerItem = ({ banner, refreshList }: BannerItemTypes) => {
  const { removeBanner } = useSlider();
  const [modalConfirm, setModalConfirm] = useState<boolean>(false);
  const [loaderDelete, setLoaderDelete] = useState<boolean>(false);

  const sanityIoImageLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 15}`;
  };

  const deleteBanner = async (id: number) => {
    try {
      setLoaderDelete(true);
      const response = await removeBanner(id);
      message.success(response.message);
      refreshList();
    } catch (error) {
    } finally {
      setLoaderDelete(false);
      setModalConfirm(false);
    }
  };

  return (
    <>
      <S.Wrapper>
        <Image
          loader={sanityIoImageLoader}
          src={`${process.env.APP_API_URL}/${banner.path}`}
          alt={`banner ${banner.id}`}
          width={1920}
          height={1048}
          style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
        />
        <S.CardFooter>
          <S.Name>{banner.originalname}</S.Name>
          <S.Info>
            <span>Link do banner:</span>
            {banner.link}
          </S.Info>
          <S.InfosAction>
            <S.Info>
              <span>Tamanho:</span>
              {`${banner.size} bytes`}
            </S.Info>
            <S.ButtonAction>
              <Button
                onClick={() => setModalConfirm(true)}
                textButton="Deletar"
                danger
                icon={<DeleteOutlined />}
                isLoading={false}
              />
            </S.ButtonAction>
          </S.InfosAction>
        </S.CardFooter>
      </S.Wrapper>

      <Modal
        isVisible={modalConfirm}
        setIsVisible={setModalConfirm}
        title="Deseja mesmo deletar?"
        cancelText="Cancelar"
        onOk={() => deleteBanner(banner.id)}
        okText="Ok, deletar!"
        buttonDanger
        msgContent="Se você deletar, irá perder a imagem."
        buttonIcon={<DeleteOutlined />}
        buttonIsLoading={false}
      />
    </>
  );
};
