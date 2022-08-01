import React, { useState, useEffect } from 'react';
import {
  Col,
  Row,
  Upload,
  Button as ButtonAntd,
  UploadFile,
  UploadProps,
  message,
} from 'antd';
import { useRouter } from 'next/router';
import { UploadOutlined, CloudUploadOutlined } from '@ant-design/icons';
import { CardBox } from 'components/Admin/CardBox';
import { Input } from 'components/Input';
import { TextArea } from 'components/Textarea';
import { RcFile } from 'antd/lib/upload';
import { getToken } from 'helpers/access-cookie.helper';
import { Button } from 'components/Button';
import { UploadMultitpleImages } from 'components/Admin/UploadMultitpleImages';

import * as S from './styles';

export const AddEvento = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [fileCover, setFileCover] = useState<RcFile | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [photos, setPhotos] = useState<RcFile[]>([]);

  const handleUpload = async () => {
    const token = await getToken();
    const formData = new FormData();

    const arrOfImages: RcFile[] = [];

    if (fileCover) {
      arrOfImages.push(fileCover);
    }

    if (photos.length) {
      photos.map((photo) => arrOfImages.push(photo));
    }

    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('description', description);

    if (arrOfImages.length) {
      arrOfImages.forEach((image) => formData.append('files', image as RcFile));
    }

    setUploading(true);

    fetch(`${process.env.APP_API_URL}/api/event`, {
      method: 'POST',
      headers: {
        'x-access-token': token,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        message.success(res.message);
        router.push('/admin/eventos');
      })
      .catch(() => {
        message.error('Salvar o evento falhou.');
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
      setFileCover(null);
    },
    beforeUpload: (file) => {
      setFileCover(file);

      return false;
    },
    maxCount: 1,
    multiple: false,
  };

  return (
    <S.Wrapper>
      <CardBox>
        <Row>
          <Col xs={24} sm={10} md={10} lg={12} xl={8} xxl={6}>
            <S.WrapperUpload>
              <S.Label>Imagem inicial</S.Label>
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
              placeholder="Título do evento"
              label
              size="large"
              id="title"
              value={title}
              onChange={(id, value) => setTitle(value)}
            />
            <Input
              placeholder="Sub título do evento"
              label
              size="large"
              id="subtitle"
              value={subtitle}
              onChange={(id, value) => setSubtitle(value)}
            />
            <TextArea
              placeholder="Descrição do evento"
              label
              size="large"
              id="description"
              value={description}
              onChange={(id, value) => setDescription(value)}
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
            <S.Label>Adionar fotos do evento</S.Label>
            <UploadMultitpleImages
              onChangeFiles={(files) => setPhotos(files)}
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
            style={{ marginTop: 25 }}
          >
            <Button
              textButton="Salvar evento"
              icon={<CloudUploadOutlined />}
              size="large"
              isLoading={uploading}
              onClick={handleUpload}
              fullWidth
            />
          </Col>
        </Row>
      </CardBox>
    </S.Wrapper>
  );
};
