import React from 'react';
import theme from 'styles/theme';

import * as S from './styles';

type InputTypes = {
  onClick(): void;
  type?: 'button' | 'submit';
  typeLayout?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  danger?: boolean;
  icon?: React.ReactNode;
  size?: 'small' | 'middle' | 'large';
  sizeCustom?: 'xlarge';
  textButton: string;
  className?: string;
  fullWidth?: boolean;
  isLoading?: boolean;
  style?: React.CSSProperties;
};

export const Button = ({
  onClick,
  type = 'button',
  typeLayout = 'primary',
  danger = false,
  icon,
  size = 'middle',
  sizeCustom,
  textButton,
  className = '',
  fullWidth = false,
  isLoading,
  style = {},
}: InputTypes) => {
  return (
    <>
      <S.Button
        onClick={onClick}
        type={typeLayout}
        icon={icon}
        danger={danger}
        htmlType={type}
        className={className}
        size={size}
        fullWidth={fullWidth}
        loading={isLoading}
        style={{
          ...style,
          fontWeight: 600,
          height: sizeCustom === 'xlarge' ? '60px;' : '',
          border: 'none',
          background: !danger
            ? `linear-gradient(90deg, ${theme.colors.yeelloow} 0%, ${theme.colors.admin.colorized[200]} 100%)`
            : '',
        }}
      >
        {textButton}
      </S.Button>
    </>
  );
};
