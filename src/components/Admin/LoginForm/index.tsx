import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useAuth } from 'hooks/use-auth/use-auth.hook';

import * as S from './styles';

import bgLogin from 'images/admin/bg-login.png';

type ErrorType = {
  error: string;
  message: string;
};

export const LoginForm = () => {
  const { signIn } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loader, setLoader] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<ErrorType>({
    error: '',
    message: '',
  });

  const handleSignIn = async (e: any) => {
    e.preventDefault();

    const body = {
      username: username.toLowerCase(),
      password,
    };

    try {
      setLoader(true);
      await signIn(body);

      router.push('/admin/dashboard');
    } catch (error: any) {
      setErrorMsg(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <S.Content>
      <S.LeftContainer>
        <S.LeftContent>
          <Image
            alt="bg login"
            src={bgLogin}
            style={{ borderTopLeftRadius: 32, borderBottomLeftRadius: 32 }}
          />
        </S.LeftContent>
      </S.LeftContainer>
      <S.RightContainer>
        <S.RightContent>
          <S.Title>Entrar</S.Title>
          <S.SubTitle>Entre com seu login e senha</S.SubTitle>

          <form method="post" onSubmit={handleSignIn} style={{ width: '100%' }}>
            <Input
              icon={<UserOutlined />}
              placeholder="Login"
              size="large"
              sizeCustom="xlarge"
              style={{ marginBottom: 0 }}
              id="email"
              value={username}
              onChange={(id, value) => setUsername(value)}
              error={errorMsg.error === 'username' ? errorMsg.message : ''}
            />
            <Input
              type="password"
              icon={<LockOutlined />}
              placeholder="Senha"
              size="large"
              sizeCustom="xlarge"
              style={{ marginBottom: 5 }}
              id="password"
              value={password}
              onChange={(id, value) => setPassword(value)}
              error={errorMsg.error === 'password' ? errorMsg.message : ''}
            />

            <Button
              textButton="Entrar"
              size="large"
              sizeCustom="xlarge"
              fullWidth
              isLoading={loader}
              onClick={() => true}
              type="submit"
            />
          </form>
        </S.RightContent>
      </S.RightContainer>
    </S.Content>
  );
};
