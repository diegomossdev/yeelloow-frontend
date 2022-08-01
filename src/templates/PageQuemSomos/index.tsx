import React, { useState, useEffect } from 'react';
import { Col, message, Row } from 'antd';
import { usePage } from 'hooks/use-page/use-page.hook';
import { CardBox } from 'components/Admin/CardBox';
import { EditorWysiwyg } from 'components/Admin/EditorWysiwyg';

import * as S from './styles';
import { Button } from 'components/Button';
import { Modal } from 'components/Admin/Modal';
import { CloudUploadOutlined, DeleteOutlined } from '@ant-design/icons';
import { UploadMultitpleImages } from 'components/Admin/UploadMultitpleImages';
import { RcFile } from 'antd/lib/upload';

export const PageQuemSomos = () => {
  const { getPageCompany, editPage, uploadCompanyImages, deleteCompanyImages } =
    usePage();
  const [htmlDescription, setHtmlDescription] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [images, setImages] = useState<any>([]);
  const [photos, setPhotos] = useState<RcFile[]>([]);
  const [modalConfirm, setModalConfirm] = useState<null | number>(null);
  const [loaderDelete, setLoaderDelete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadPage = async () => {
    const { data } = await getPageCompany();

    setImages(data?.images);
    setDescription(data?.page?.description);
  };

  useEffect(() => {
    loadPage();
  }, []);

  const sendPage = async () => {
    try {
      setIsLoading(true);
      const page = {
        title: 'Quem somos',
        description: htmlDescription,
      };

      const formData = new FormData();
      const arrOfImages: RcFile[] = [];

      if (photos.length) {
        photos.map((photo) => arrOfImages.push(photo));
      }
      if (arrOfImages.length) {
        arrOfImages.forEach((image) =>
          formData.append('files', image as RcFile)
        );
      }

      const response = await editPage({ id: 2, page });
      await uploadCompanyImages(formData);
      await loadPage();
      message.success(response.message);
    } catch (error) {
      message.error('Houve algum erro.');
    } finally {
      setIsLoading(false);
      setPhotos([]);
    }
  };

  const deletePhoto = async (id: null | number) => {
    try {
      setLoaderDelete(true);

      if (id) {
        const response = await deleteCompanyImages(id);
        message.success(response.message);
        loadPage();
      }
    } catch (error) {
    } finally {
      setLoaderDelete(false);
      setModalConfirm(null);
    }
  };

  return (
    <>
      <CardBox>
        <Row gutter={[24, 24]} style={{ width: '100%' }}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            <div style={{ marginBottom: 15 }}>
              <S.Strong>Texto quem somos:</S.Strong>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={24}>
            <EditorWysiwyg
              htmlOnChange={(html: string) => setHtmlDescription(html)}
              textDefault={description}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={24} style={{ marginTop: 5 }}>
            <S.Label>Imagens sobre a empresa</S.Label>
            <Row gutter={[24, 24]} style={{ width: '100%' }}>
              {images?.length ? (
                images?.map((photo: any) => (
                  <Col xs={12} sm={12} md={8} key={photo.id}>
                    <S.BoxImg>
                      <S.DelPhoto
                        type="button"
                        onClick={() => setModalConfirm(photo.id)}
                      >
                        <DeleteOutlined />
                      </S.DelPhoto>
                      <img
                        alt="Cover img"
                        src={`${process.env.APP_API_URL}/${photo.path}`}
                      />
                    </S.BoxImg>
                  </Col>
                ))
              ) : (
                <Col xs={12} sm={12} md={8}>
                  <S.Label>Sem nenhuma imagem ainda, adicione.</S.Label>
                </Col>
              )}
            </Row>
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
            <S.Label>Adicionar fotos da empresa</S.Label>
            <UploadMultitpleImages
              onChangeFiles={(files) => setPhotos(files)}
            />
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
            style={{ marginTop: 60 }}
          >
            <Button
              textButton="Salvar página (texto e imagens)"
              icon={<CloudUploadOutlined />}
              size="large"
              isLoading={isLoading}
              onClick={sendPage}
              fullWidth
            />
          </Col>
        </Row>
      </CardBox>

      <Modal
        isVisible={Boolean(modalConfirm)}
        setIsVisible={setModalConfirm}
        title="Deseja mesmo deletar?"
        cancelText="Cancelar"
        onOk={() => deletePhoto(modalConfirm)}
        okText="Ok, deletar!"
        buttonDanger
        msgContent="Se você deletar, irá perder a imagem."
        buttonIcon={<DeleteOutlined />}
        buttonIsLoading={false}
      />
    </>
  );
};
