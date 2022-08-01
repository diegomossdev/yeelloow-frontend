import React from 'react';
import { Input as InputAntd } from 'antd';

import * as S from './styles';

type InputTypes = {
  icon?: React.ReactNode;
  type?: 'text' | 'password';
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
};

export const Input = ({
  icon,
  type = 'text',
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
}: InputTypes) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(id, e.target.value);
    }
  };

  return (
    <>
      {type === 'text' ? (
        <>
          {infoInput ? (
            <S.InfoInput style={{ marginTop: infoInput ? style.marginTop : 0 }}>
              {infoInput}
            </S.InfoInput>
          ) : null}
          <>
            {label ? (
              <label style={{ fontSize: 12 }}>{placeholder}</label>
            ) : null}
            <InputAntd
              size={size}
              placeholder={placeholder}
              prefix={icon ? icon : false}
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
      ) : (
        <>
          {infoInput ? (
            <S.InfoInput style={{ marginTop: infoInput ? style.marginTop : 0 }}>
              {infoInput}
            </S.InfoInput>
          ) : null}
          <>
            {label ? (
              <label style={{ fontSize: 12 }}>{placeholder}</label>
            ) : null}
            <InputAntd.Password
              size={size}
              placeholder={placeholder}
              prefix={icon ? icon : false}
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
      )}
    </>
  );
};
