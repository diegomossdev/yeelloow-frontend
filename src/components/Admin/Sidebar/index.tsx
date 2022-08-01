import React from 'react';
import { Layout } from 'antd';
import Link from 'next/link';

import * as S from './styles';

import {
  UserOutlined,
  FileImageTwoTone,
  EditTwoTone,
  SnippetsTwoTone,
  PlusCircleTwoTone,
  InfoCircleTwoTone,
} from '@ant-design/icons';
import theme from 'styles/theme';
import { useRouter } from 'next/router';

export const Sidebar = () => {
  const router = useRouter();

  return (
    <Layout.Sider
      className="sidebar"
      breakpoint={'lg'}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      <S.List>
        <li>
          <S.NameCategory>
            <h3>ir para o site</h3>
          </S.NameCategory>
          <S.Label>
            <Link href="/" target="_blank">
              <a target="_blank">
                <S.Icon>
                  <FileImageTwoTone twoToneColor={theme.colors.yeelloow} />
                </S.Icon>
                <span>Ver o site</span>
              </a>
            </Link>
          </S.Label>
        </li>
        <li>
          <S.NameCategory>
            <h3>slider página inicial</h3>
          </S.NameCategory>
          <S.Label active={router.pathname === '/admin/banners'}>
            <Link
              href={
                router.pathname === '/admin/banners' ? '' : '/admin/banners'
              }
            >
              <a>
                <S.Icon>
                  <FileImageTwoTone twoToneColor={theme.colors.yeelloow} />
                </S.Icon>
                <span>Banners</span>
              </a>
            </Link>
          </S.Label>
          <S.Label active={router.pathname === '/admin/adicionar-banner'}>
            <Link
              href={
                router.pathname === '/admin/adicionar-banner'
                  ? ''
                  : '/admin/adicionar-banner'
              }
            >
              <a>
                <S.Icon>
                  <PlusCircleTwoTone twoToneColor={theme.colors.yeelloow} />
                </S.Icon>
                <span>Adicionar banner</span>
              </a>
            </Link>
          </S.Label>
        </li>
        <li>
          <S.NameCategory>
            <h3>EDITAR PÁGINA</h3>
          </S.NameCategory>
          <S.Label active={router.pathname === '/admin/pagina-inicial'}>
            <Link
              href={
                router.pathname === '/admin/pagina-inicial'
                  ? ''
                  : '/admin/pagina-inicial'
              }
            >
              <a>
                <S.Icon>
                  <EditTwoTone twoToneColor={theme.colors.yeelloow} />
                </S.Icon>
                <span>Página Inicial</span>
              </a>
            </Link>
          </S.Label>
          <S.Label active={router.pathname === '/admin/pagina-quem-somos'}>
            <Link
              href={
                router.pathname === '/admin/pagina-quem-somos'
                  ? ''
                  : '/admin/pagina-quem-somos'
              }
            >
              <a>
                <S.Icon>
                  <EditTwoTone twoToneColor={theme.colors.yeelloow} />
                </S.Icon>
                <span>Página quem somos</span>
              </a>
            </Link>
          </S.Label>
        </li>
        <li>
          <S.NameCategory>
            <h3>eventos</h3>
          </S.NameCategory>
          <S.Label active={router.pathname === '/admin/eventos'}>
            <Link
              href={
                router.pathname === '/admin/eventos' ? '' : '/admin/eventos'
              }
            >
              <a>
                <S.Icon>
                  <SnippetsTwoTone twoToneColor={theme.colors.yeelloow} />
                </S.Icon>
                <span>Lista de eventos</span>
              </a>
            </Link>
          </S.Label>
          <S.Label active={router.pathname === '/admin/adicionar-evento'}>
            <Link
              href={
                router.pathname === '/admin/adicionar-evento'
                  ? ''
                  : '/admin/adicionar-evento'
              }
            >
              <a>
                <S.Icon>
                  <PlusCircleTwoTone twoToneColor={theme.colors.yeelloow} />
                </S.Icon>
                <span>Adicionar evento</span>
              </a>
            </Link>
          </S.Label>
        </li>
        <li>
          <S.NameCategory>
            <h3>empresa</h3>
          </S.NameCategory>
          <S.Label active={router.pathname === '/admin/informacoes-gerais'}>
            <Link
              href={
                router.pathname === '/admin/informacoes-gerais'
                  ? ''
                  : '/admin/informacoes-gerais'
              }
            >
              <a>
                <S.Icon>
                  <InfoCircleTwoTone twoToneColor={theme.colors.yeelloow} />
                </S.Icon>
                <span>Informações gerais</span>
              </a>
            </Link>
          </S.Label>
        </li>
      </S.List>
    </Layout.Sider>
  );
};
