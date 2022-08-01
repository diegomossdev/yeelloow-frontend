import React from 'react';
import * as S from './styles';
import { Navbar } from 'components/Admin/Navbar';
import { Sidebar } from 'components/Admin/Sidebar';

type AdminTypes = {
  children: React.ReactNode;
};

export const Admin = ({ children }: AdminTypes) => {
  return (
    <S.Wrapper>
      <Navbar />
      <Sidebar />

      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};
