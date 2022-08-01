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
import { useEventos } from 'hooks/use-eventos/use-eventos.hook';
import { useRouter } from 'next/router';
import {
  UploadOutlined,
  CloudUploadOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { CardBox } from 'components/Admin/CardBox';
import { Input } from 'components/Input';
import { TextArea } from 'components/Textarea';
import { RcFile } from 'antd/lib/upload';
import { getToken } from 'helpers/access-cookie.helper';
import { Button } from 'components/Button';
import { UploadMultitpleImages } from 'components/Admin/UploadMultitpleImages';
import { Modal } from 'components/Admin/Modal';

import * as S from './styles';

import { Event, Photos } from 'types/events';

type EditEventoProps = {
  id: number;
};

export const EditEvento = ({ id }: EditEventoProps) => {
  const {
    getEventById,
    deleteImageEvent,
    editEvent,
    editCoverImgEvent,
    addImages,
  } = useEventos();
  const router = useRouter();
  const [event, setEvent] = useState<Event>({} as Event);
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [fileCover, setFileCover] = useState<RcFile | null>(null);
  const [updateFileCover, setUpdateFileCover] = useState<boolean>(false);
  const [photos, setPhotos] = useState<RcFile[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalConfirm, setModalConfirm] = useState<null | number>(null);
  const [loaderDelete, setLoaderDelete] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);

  const loadEvent = async () => {
    try {
      setIsLoading(true);
      const { data } = await getEventById({ id });

      setTitle(data?.event?.title);
      setSubtitle(data?.event?.subtitle);
      setDescription(data?.event?.description);

      const photos = data?.event?.photos.filter(
        (itemData: Photos) => itemData.path !== data?.event?.coverimg
      );

      const dataUpdated = { ...data?.event, photos };

      setEvent(dataUpdated);
    } catch (error) {
      message.error(`Erro ao buscar evento: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshList = () => {
    loadEvent();
  };

  const handleSave = async () => {
    const send = {
      title,
      subtitle,
      description,
    };

    try {
      setUploading(true);
      const arrOfImages: RcFile[] = [];

      if (updateFileCover) {
        const res = await editCoverImgEvent({ id: event.id, img: fileCover });
      }

      if (photos.length) {
        photos.map((photo) => arrOfImages.push(photo));

        const resp = await addImages({ id: event.id, imgs: arrOfImages });
      }

      const response = await editEvent({ id: event.id, event: send });
      message.success(response.message);
      refreshList();
    } catch (error) {
      message.error('Salvar o evento falhou.');
    } finally {
      setUploading(false);
      setUpdateFileCover(false);
    }
  };

  const deletePhoto = async (id: null | number) => {
    try {
      setLoaderDelete(true);

      if (id) {
        const response = await deleteImageEvent(id);
        message.success(response.message);
        refreshList();
      }
    } catch (error) {
    } finally {
      setLoaderDelete(false);
      setModalConfirm(null);
    }
  };

  useEffect(() => {
    loadEvent();
  }, []);

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
    onRemove: () => {
      setFileCover(null);
      setUpdateFileCover(false);
    },
    beforeUpload: (file) => {
      setFileCover(file);
      setUpdateFileCover(true);

      return false;
    },
    maxCount: 1,
    multiple: false,
  };

  return (
    <>
      <S.Wrapper>
        {isLoading ? (
          <div>Carregando</div>
        ) : (
          <CardBox>
            <Row>
              <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={8}>
                <S.WrapperUpload>
                  <S.Label>Imagem inicial</S.Label>
                  <S.BoxImg>
                    <img
                      alt="Cover img"
                      src={`${process.env.APP_API_URL}/${event.coverimg}`}
                    />
                  </S.BoxImg>
                  <S.Label>Alterar imagem inicial</S.Label>
                  <Upload
                    {...props}
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
            <Row>
              <Col xs={24} sm={12} md={12} lg={12} xl={8} xxl={8}>
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
              <Col xs={24} style={{ marginTop: 5 }}>
                <S.Label>
                  {event?.photos?.length
                    ? 'Imagens adicionadas do evento'
                    : null}
                </S.Label>
                <Row gutter={[24, 24]} style={{ width: '100%' }}>
                  {event?.photos?.length ? (
                    event?.photos?.map((photo) => (
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
            <Row>
              <Col
                xs={24}
                sm={12}
                md={12}
                lg={12}
                xl={8}
                xxl={8}
                style={{ marginTop: 25 }}
              >
                <S.Label>Adicionar fotos ao evento</S.Label>
                <UploadMultitpleImages
                  onChangeFiles={(files) => setPhotos(files)}
                />
              </Col>
            </Row>
            <Row>
              <Col
                xs={24}
                sm={12}
                md={12}
                lg={12}
                xl={8}
                xxl={8}
                style={{ marginTop: 25 }}
              >
                <Button
                  textButton="Salvar evento"
                  icon={<CloudUploadOutlined />}
                  size="large"
                  isLoading={uploading}
                  onClick={handleSave}
                  fullWidth
                />
              </Col>
            </Row>
          </CardBox>
        )}
      </S.Wrapper>

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
