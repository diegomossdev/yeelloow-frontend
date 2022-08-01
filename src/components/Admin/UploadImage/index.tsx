import React, { useState, useEffect } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

import * as S from './styles';
import { getToken } from 'helpers/access-cookie.helper';

export const UploadImage = () => {
  const [fileBanner, setFileBanner] = useState<UploadFile | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<boolean>(false);

  const handleUpload = async () => {
    const token = await getToken();
    const formData = new FormData();
    formData.append('file', fileBanner as RcFile);
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
        setFileBanner(null);
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
    <S.Wrapper>
      <>
        <S.WrapperUpload>
          <Upload {...props} listType="picture-card" onPreview={onPreview}>
            <Button icon={<UploadOutlined />}>Selecionar imagem</Button>
          </Upload>
        </S.WrapperUpload>
        <Button
          type="primary"
          onClick={handleUpload}
          disabled={fileBanner ? false : true}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
      </>
    </S.Wrapper>
  );
};
