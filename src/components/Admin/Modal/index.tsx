import React, { useState } from 'react';
import { Button, Modal as ModalAntd } from 'antd';
// import * as S from "./styles";

type ModalTypes = {
  isVisible: boolean;
  setIsVisible: any;
  title?: string;
  onOk: any;
  okText?: string;
  cancelText?: string;
  buttonDanger?: boolean;
  msgContent: string;
  buttonIcon?: React.ReactNode;
  buttonIsLoading?: boolean;
};
export const Modal = ({
  isVisible,
  setIsVisible,
  title,
  onOk,
  okText,
  cancelText,
  buttonDanger = false,
  msgContent,
  buttonIcon,
  buttonIsLoading,
}: ModalTypes) => {
  return (
    <>
      <ModalAntd
        title={title}
        centered
        visible={isVisible}
        onOk={onOk}
        onCancel={() => setIsVisible(false)}
        okText={okText}
        cancelText={cancelText}
        okButtonProps={{
          danger: buttonDanger,
          icon: buttonIcon,
          loading: buttonIsLoading,
        }}
      >
        <p>{msgContent}</p>
      </ModalAntd>
    </>
  );
};
