import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Card as CardAntd, Skeleton, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Event } from 'types/events';
import { useEventos } from 'hooks/use-eventos/use-eventos.hook';

import { Modal } from 'components/Admin/Modal';

import * as S from './styles';
const { Meta } = CardAntd;

type CardTypes = {
  isLoading: boolean;
  item: Event;
  refreshList: any;
};

type ActionButtonTypes = {
  ico: any;
  id: number;
  type: 'edit' | 'delete';
};

export const Card = ({ isLoading, item, refreshList }: CardTypes) => {
  const router = useRouter();
  const { deleteEvent } = useEventos();
  const [modalConfirm, setModalConfirm] = useState<boolean>(false);
  const [loaderDelete, setLoaderDelete] = useState<boolean>(false);

  const removeEvent = async (id: number) => {
    try {
      setLoaderDelete(true);
      const response = await deleteEvent(id);
      message.success(response.message);
      refreshList();
      setModalConfirm(false);
    } catch (error) {
    } finally {
      setLoaderDelete(false);
      setModalConfirm(false);
    }
  };

  const actionButton = ({ ico, id, type }: ActionButtonTypes) => {
    return (
      <S.ButtonAction
        type="button"
        onClick={
          type === 'edit'
            ? () => router.push(`/admin/evento/${id}`)
            : () => setModalConfirm(true)
        }
      >
        {ico}
      </S.ButtonAction>
    );
  };

  return (
    <>
      <S.Card
        hoverable
        loading={isLoading}
        style={{ width: '100%' }}
        cover={
          <img
            alt="imagem do evento"
            src={`${process.env.APP_API_URL}/${item.coverimg}`}
          />
        }
        actions={[
          actionButton({
            ico: <EditOutlined key="edit" />,
            id: item.id,
            type: 'edit',
          }),
          actionButton({
            ico: <DeleteOutlined key="delete" />,
            id: item.id,
            type: 'delete',
          }),
        ]}
      >
        <Skeleton loading={isLoading} avatar active>
          <Meta title={item.title} description={item.subtitle} />
        </Skeleton>
      </S.Card>

      <Modal
        isVisible={modalConfirm}
        setIsVisible={setModalConfirm}
        title="Deseja mesmo deletar?"
        cancelText="Cancelar"
        onOk={() => removeEvent(item.id)}
        okText="Ok, deletar!"
        buttonDanger
        msgContent="Se você deletar, irá perder o evento."
        buttonIcon={<DeleteOutlined />}
        buttonIsLoading={loaderDelete}
      />
    </>
  );
};
