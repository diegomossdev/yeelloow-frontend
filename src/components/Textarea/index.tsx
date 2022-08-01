import React from 'react';
import { Input as InputAntd } from 'antd';

import * as S from './styles';

type InputTypes = {
  size?: 'small' | 'middle' | 'large';
  sizeCustom?: 'xlarge';
  placeholder?: string;
  label?: boolean;
  infoInput?: string;
  style?: React.CSSProperties;
  id: string;
  value?: string;
  onChange(id: string, value: string): void;
  error?: string;
  rows?: number;
};

const { TextArea: TextAreaAntd } = InputAntd;

export const TextArea = ({
  size = 'middle',
  sizeCustom,
  placeholder = '',
  label,
  infoInput = '',
  style = {},
  id,
  value,
  onChange,
  error,
  rows = 6,
}: InputTypes) => {
  const handleChange = (e: any) => {
    if (onChange) {
      onChange(id, e.target.value);
    }
  };

  return (
    <>
      <>
        {infoInput ? (
          <S.InfoInput style={{ marginTop: infoInput ? style.marginTop : 0 }}>
            {infoInput}
          </S.InfoInput>
        ) : null}
        <>
          {label ? <label style={{ fontSize: 12 }}>{placeholder}</label> : null}
          <TextAreaAntd
            rows={rows}
            size={size}
            placeholder={placeholder}
            style={{
              ...style,
              borderRadius: 6,
              height: sizeCustom === 'xlarge' ? '60px;' : '',
              marginTop: infoInput || label ? 6 : style.marginTop,
            }}
            id={id}
            value={value}
            onChange={handleChange}
            status={error ? 'error' : ''}
          />
          <S.LabelError>{error}</S.LabelError>
        </>
      </>
    </>
  );
};
