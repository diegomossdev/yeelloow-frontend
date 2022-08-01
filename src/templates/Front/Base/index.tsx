import React, { useState, useEffect } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import * as S from './styles';
import { Information } from 'types/information';

export type BaseTemplateProps = {
  children: React.ReactNode;
  informations: Information[];
};

export const Base = ({ children, informations }: BaseTemplateProps) => {
  const [logo, setLogo] = useState<string>('');

  useEffect(() => {
    const logoInfo = informations.find((info) => info.key === 'logo');

    setLogo(logoInfo?.path ? logoInfo.path : '');
  }, [informations]);

  return (
    <S.Wrapper>
      <Header logo={logo} />

      {children}

      <Footer informations={informations} />
    </S.Wrapper>
  );
};
