import React, { useEffect, useState } from 'react';
import { Col, Row, message, Upload, Button as ButtonAntd } from 'antd';
import { CardBox } from 'components/Admin/CardBox';
import { EditorWysiwyg } from 'components/Admin/EditorWysiwyg';

import * as S from './styles';
import { Button } from 'components/Button';
import { CloudUploadOutlined, UploadOutlined } from '@ant-design/icons';
import { usePage } from 'hooks/use-page/use-page.hook';
import { RcFile, UploadFile, UploadProps } from 'antd/lib/upload';

type SaveProps = {
  id: number;
  key: number;
};

type BeforeUploadProps = {
  id: number;
  file: RcFile;
};

export const PageHome = () => {
  const { getPageHome, updateTextAndImage } = usePage();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [htmlDescription1, setHtmlDescription1] = useState<string>('');
  const [image1, setImage1] = useState<RcFile | null>(null);
  const [description1, setDescription1] = useState<string>('');
  const [htmlDescription2, setHtmlDescription2] = useState<string>('');
  const [image2, setImage2] = useState<RcFile | null>(null);
  const [description2, setDescription2] = useState<string>('');
  const [dataPage, setDataPage] = useState<any>(null);

  const loadPage = async () => {
    try {
      setIsLoading(true);

      const { data } = await getPageHome();

      setDescription1(data?.textandimages[0]?.text);
      setDescription2(data?.textandimages[1]?.text);
      setDataPage(data);
    } catch (error) {
      message.error('Houve algum erro ao carregar as informações.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPage();
  }, []);

  const saveTextAndImage = async ({ id, key }: SaveProps) => {
    try {
      const formData = new FormData();

      if (key === 0) {
        if (image1) {
          formData.append('file', image1);
        }
        formData.append('text', htmlDescription1);
      }
      if (key === 1) {
        if (image2) {
          formData.append('file', image2);
        }
        formData.append('text', htmlDescription2);
      }
      const response = await updateTextAndImage({ id, formData });
      message.success(response.message);
      await loadPage();
    } catch (error) {
      message.error('Houve algum erro ao enviar as informações.');
    }
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
    maxCount: 1,
    multiple: false,
  };

  const beforeUpload = ({ id, file }: BeforeUploadProps) => {
    if (id === 1) {
      setImage1(file);
    }

    if (id === 2) {
      setImage2(file);
    }

    return false;
  };

  const onRemove = (id: number) => {
    if (id === 1) {
      setImage1(null);
    }

    if (id === 2) {
      setImage2(null);
    }

    return false;
  };

  return (
    <CardBox>
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={6}>
          <div style={{ marginBottom: 15 }}>
            <S.Strong>Primeiro texto e imagem:</S.Strong>
          </div>
        </Col>
      </Row>
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        <Col xs={24} sm={10} md={10} lg={12} xl={12} xxl={12}>
          <EditorWysiwyg
            htmlOnChange={(html: string) => setHtmlDescription1(html)}
            textDefault={description1}
          />
        </Col>
        <Col xs={24} sm={10} md={10} lg={6} xl={6} xxl={6}>
          <S.WrapperPreview>
            <S.TitlePreview>Imagem 1</S.TitlePreview>
            <S.BoxImg>
              <img
                alt="Imagem 1"
                src={`${process.env.APP_API_URL}/${dataPage?.textandimages[0]?.path}`}
              />
            </S.BoxImg>
          </S.WrapperPreview>
        </Col>
        <Col xs={24} sm={10} md={10} lg={6} xl={6} xxl={6}>
          <S.WrapperUpload>
            <Upload
              {...props}
              beforeUpload={(file) => beforeUpload({ id: 1, file })}
              onRemove={() => onRemove(1)}
              listType="picture-card"
              onPreview={onPreview}
            >
              <ButtonAntd icon={<UploadOutlined />}>
                Selecionar imagem
              </ButtonAntd>
            </Upload>
          </S.WrapperUpload>
        </Col>
      </Row>
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        <Col
          xs={24}
          sm={10}
          md={10}
          lg={12}
          xl={8}
          xxl={6}
          style={{ marginTop: 30 }}
        >
          <Button
            textButton="Salvar texto/imagem 1"
            icon={<CloudUploadOutlined />}
            size="large"
            isLoading={false}
            onClick={() =>
              saveTextAndImage({ id: dataPage?.textandimages[0].id, key: 0 })
            }
            fullWidth
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={12}>
          <div style={{ marginBottom: 15, marginTop: 30 }}>
            <S.Strong>Segundo texto e imagem:</S.Strong>
          </div>
        </Col>
      </Row>
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        <Col xs={24} sm={10} md={10} lg={12} xl={12} xxl={12}>
          <EditorWysiwyg
            htmlOnChange={(html: string) => setHtmlDescription2(html)}
            textDefault={description2}
          />
        </Col>
        <Col xs={24} sm={10} md={10} lg={6} xl={6} xxl={6}>
          <S.WrapperPreview>
            <S.TitlePreview>Imagem 2</S.TitlePreview>
            <S.BoxImg>
              <img
                alt="Imagem 2"
                src={`${process.env.APP_API_URL}/${dataPage?.textandimages[1]?.path}`}
              />
            </S.BoxImg>
          </S.WrapperPreview>
        </Col>
        <Col xs={24} sm={10} md={10} lg={6} xl={6} xxl={6}>
          <S.WrapperUpload>
            <Upload
              {...props}
              beforeUpload={(file) => beforeUpload({ id: 2, file })}
              onRemove={() => onRemove(2)}
              listType="picture-card"
              onPreview={onPreview}
            >
              <ButtonAntd icon={<UploadOutlined />}>
                Selecionar imagem
              </ButtonAntd>
            </Upload>
          </S.WrapperUpload>
        </Col>
      </Row>
      <Row gutter={[24, 24]} style={{ width: '100%' }}>
        <Col
          xs={24}
          sm={10}
          md={10}
          lg={12}
          xl={8}
          xxl={6}
          style={{ marginTop: 15 }}
        >
          <Button
            textButton="Salvar texto/imagem 2"
            icon={<CloudUploadOutlined />}
            size="large"
            isLoading={false}
            onClick={() =>
              saveTextAndImage({ id: dataPage?.textandimages[1].id, key: 1 })
            }
            fullWidth
          />
        </Col>
      </Row>
    </CardBox>
  );
};
