import React, { useState, useEffect } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Space, Upload, UploadProps } from 'antd';
import { RcFile } from 'antd/lib/upload';

type UploadMultitpleImagesProps = {
  onChangeFiles(files: RcFile[]): void;
};

export const UploadMultitpleImages = ({
  onChangeFiles,
}: UploadMultitpleImagesProps) => {
  const props: UploadProps = {
    onRemove: (file) => {
      onChangeFiles([]);
    },
    beforeUpload: (files, fileList) => {
      onChangeFiles(fileList);

      return false;
    },
    maxCount: 10,
    multiple: false,
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      <Upload {...props} listType="picture" maxCount={10} multiple>
        <Button icon={<UploadOutlined />}>Adicionar fotos (Max: 10)</Button>
      </Upload>
    </Space>
  );
};
