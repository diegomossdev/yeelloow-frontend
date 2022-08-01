import React, { useState, useEffect } from 'react';
import { Col, message, Row, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Button as ButtonAntd, UploadFile, UploadProps } from 'antd';
import { RcFile } from 'antd/lib/upload';
import { getToken } from 'helpers/access-cookie.helper';

import { CardBox } from 'components/Admin/CardBox';
import { Input } from 'components/Input';
import { Button } from 'components/Button';

import { LinkOutlined, CloudUploadOutlined } from '@ant-design/icons';

import * as S from './styles';
import { useRouter } from 'next/router';

export const AddBanner = () => {
  const router = useRouter();
  const [fileBanner, setFileBanner] = useState<UploadFile | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<boolean>(false);
  const [link, setLink] = useState<string>('');

  const handleUpload = async () => {
    const token = await getToken();
    const formData = new FormData();
    formData.append('file', fileBanner as RcFile);
    formData.append('link', link);
    setUploading(true);

    fetch(`${process.env.APP_API_URL}/api/slider`, {
      method: 'POST',
      headers: {
        'x-access-token': token,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        message.success(res.message);
        router.push('/admin/banners');
      })
      .catch(() => {
        message.error('Envio da imagem falhou.');
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const props: UploadProps = {
    onRemove: (file) => {
      setFileBanner(null);
    },
    beforeUpload: (file) => {
      setFileBanner(file);

      return false;
    },
    maxCount: 1,
    multiple: false,
  };

  useEffect(() => {
    setSelectedImage(fileBanner ? true : false);
  }, [fileBanner]);

  return (
    <S.WrapperAddBanner>
      <CardBox>
        <Row>
          <Col xs={24} sm={10} md={10} lg={12} xl={8} xxl={6}>
            <S.WrapperUpload>
              <Upload {...props} listType="picture-card" onPreview={onPreview}>
                <ButtonAntd icon={<UploadOutlined />}>
                  Selecionar imagem
                </ButtonAntd>
              </Upload>
            </S.WrapperUpload>
          </Col>
        </Row>

        <Row>
          <Col xs={24} sm={10} md={10} lg={12} xl={8} xxl={6}>
            <Input
              icon={<LinkOutlined />}
              placeholder="Link do banner"
              size="large"
              style={{ marginTop: 24, marginBottom: 12 }}
              infoInput="Coloque um link de alguma página para o banner (opcional):"
              id="link"
              value={link}
              onChange={(id, value) => setLink(value)}
            />
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={10}
            md={10}
            lg={12}
            xl={8}
            xxl={6}
            style={{ marginTop: 5 }}
          >
            <Button
              textButton="Enviar banner"
              icon={<CloudUploadOutlined />}
              size="large"
              isLoading={uploading}
              onClick={handleUpload}
              fullWidth
            />
          </Col>
        </Row>
      </CardBox>
    </S.WrapperAddBanner>
  );
};
