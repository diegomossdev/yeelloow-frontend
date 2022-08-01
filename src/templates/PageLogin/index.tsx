import React from 'react';
import Image from 'next/image';
import { LoginForm } from 'components/Admin/LoginForm';
import * as S from './styles';

import YeelloowLogo from 'images/admin/yeelloow-logo.png';

export const PageLogin = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <Image
          src={YeelloowLogo}
          alt="Yeelloow admin"
          width={115}
          height={41.666667}
        />
      </S.Logo>
      <LoginForm />
    </S.Wrapper>
  );
};
