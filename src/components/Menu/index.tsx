import React, { useState } from 'react';
import { Menu as MenuAntd } from 'antd';

import * as S from './styles';
import Link from 'next/link';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

export const menuItems = [
  { label: 'Home', key: 'item-1', href: '/' },
  { label: 'Quem somos', key: 'item-2', href: '/quem-somos' },
  { label: 'Eventos', key: 'item-3', href: '/eventos' },
  { label: 'Contato', key: 'item-4', href: '/contato' },
];

export const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <S.Wrapper>
        <S.ButtonMobile type="button" onClick={() => setOpen(true)}>
          <MenuOutlined />
        </S.ButtonMobile>

        <S.Content open={open}>
          <S.TitleMobile>
            <h1>Menu</h1>
            <button type="button" onClick={() => setOpen(false)}>
              <CloseOutlined />
            </button>
          </S.TitleMobile>

          <MenuAntd>
            {menuItems.map((item, index: number) => (
              <MenuAntd.Item key={`${index}-${item.key}`}>
                <Link href={`/${item.href}`}>
                  <a>{item.label}</a>
                </Link>
              </MenuAntd.Item>
            ))}
          </MenuAntd>
        </S.Content>
      </S.Wrapper>
    </>
  );
};
