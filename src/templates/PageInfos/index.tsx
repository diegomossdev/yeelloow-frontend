import React, { useState, useEffect } from 'react';
import { useInfos } from 'hooks/use-infos/use-infos.hook';
import {
  Col,
  message,
  Row,
  UploadFile,
  Button as ButtonAntd,
  Upload,
} from 'antd';
import { Information } from 'types/information';
import { CardBox } from 'components/Admin/CardBox';
import { Input } from 'components/Input';

import * as S from './styles';
import {
  CloudUploadOutlined,
  LinkOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Button } from 'components/Button';
import { RcFile, UploadProps } from 'antd/lib/upload';

type StateInfo = {
  update: boolean;
  info: Information;
};

export const PageInfos = () => {
  const { getInformations, updateInformation, updateLogo } = useInfos();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const [endereco, setEndereco] = useState<StateInfo>({} as StateInfo);
  const [email, setEmail] = useState<StateInfo>({} as StateInfo);
  const [telefone, setTelefone] = useState<StateInfo>({} as StateInfo);
  const [logo, setLogo] = useState<StateInfo>({} as StateInfo);
  const [logoBkp, setLogoBkp] = useState<Information>({} as Information);
  const [logoSend, setLogoSend] = useState<RcFile>({} as RcFile);
  const [empresa, setEmpresa] = useState<StateInfo>({} as StateInfo);
  const [primaryColor, setPrimaryColor] = useState<StateInfo>({} as StateInfo);
  const [secondaryColor, setSecondaryColor] = useState<StateInfo>(
    {} as StateInfo
  );

  const loadInfos = async () => {
    try {
      setIsLoading(true);
      const { data } = await getInformations();

      data?.map((item: Information) => {
        if (item.key === 'endereço') {
          setEndereco({ update: false, info: item });
        } else if (item.key === 'email') {
          setEmail({ update: false, info: item });
        } else if (item.key === 'telefone') {
          setTelefone({ update: false, info: item });
        } else if (item.key === 'logo') {
          setLogo({ update: false, info: item });
          setLogoBkp(item);
        } else if (item.key === 'empresa') {
          setEmpresa({ update: false, info: item });
        } else if (item.key === 'primaryColor') {
          setPrimaryColor({ update: false, info: item });
        } else if (item.key === 'secondaryColor') {
          setSecondaryColor({ update: false, info: item });
        }
      });
    } catch (error) {
      message.error('Houve algum erro');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadInfos();
  }, []);

  const handleUpload = async () => {
    const arrSend = [
      endereco,
      email,
      telefone,
      empresa,
      primaryColor,
      secondaryColor,
    ];

    await Promise.all(
      arrSend.map(async (item) => {
        if (item.update) {
          await updateInformation({ id: item.info.id, info: item.info.value });
        }
        return;
      })
    );

    if (logo.update) {
      const formData = new FormData();

      formData.append('file', logoSend);
      await updateLogo({ id: logo.info.id, image: formData });
    }
    await loadInfos();
    message.success('Informações alteradas com sucesso!');
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const props: UploadProps = {
    onRemove: () => {
      setLogo({ update: false, info: logoBkp });
      setLogoSend({} as RcFile);
    },
    beforeUpload: (file) => {
      setLogo({ update: true, info: logo.info });
      setLogoSend(file);
      return false;
    },
    maxCount: 1,
    multiple: false,
  };

  return (
    <>
      {isLoading ? (
        <div>Carregando informações...</div>
      ) : (
        <S.Wrapper>
          <CardBox>
            <Row>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                <S.WrapperUpload>
                  <S.Label>Logo da empresa</S.Label>
                  <S.LogoBox>
                    <S.BoxImg>
                      <img
                        alt="Cover img"
                        src={`${process.env.APP_API_URL}/${logo?.info?.path}`}
                      />
                    </S.BoxImg>
                  </S.LogoBox>
                  <S.Label>Alterar logo da empresa</S.Label>
                  <Upload
                    {...props}
                    listType="picture-card"
                    onPreview={onPreview}
                  >
                    <ButtonAntd icon={<UploadOutlined />}>
                      Selecionar imagem
                    </ButtonAntd>
                  </Upload>
                </S.WrapperUpload>
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                <Input
                  icon={<LinkOutlined />}
                  placeholder="Endereço"
                  label
                  size="large"
                  style={{ marginTop: 24, marginBottom: 12 }}
                  id={endereco?.info?.key}
                  value={endereco?.info?.value}
                  onChange={(id, value) =>
                    setEndereco({
                      info: { ...endereco.info, value },
                      update: true,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                <Input
                  icon={<LinkOutlined />}
                  placeholder="E-mail"
                  label
                  size="large"
                  style={{ marginTop: 24, marginBottom: 12 }}
                  id={email?.info?.key}
                  value={email?.info?.value}
                  onChange={(id, value) =>
                    setEmail({ info: { ...email.info, value }, update: true })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                <Input
                  icon={<LinkOutlined />}
                  placeholder="Telefone/whats"
                  label
                  size="large"
                  style={{ marginTop: 24, marginBottom: 12 }}
                  id={telefone?.info?.key}
                  value={telefone?.info?.value}
                  onChange={(id, value) =>
                    setTelefone({
                      info: { ...telefone.info, value },
                      update: true,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                <Input
                  icon={<LinkOutlined />}
                  placeholder="Nome da empresa"
                  label
                  size="large"
                  style={{ marginTop: 24, marginBottom: 12 }}
                  id={empresa?.info?.key}
                  value={empresa?.info?.value}
                  onChange={(id, value) =>
                    setEmpresa({
                      info: { ...empresa.info, value },
                      update: true,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                <Input
                  icon={<LinkOutlined />}
                  placeholder="Cor primária"
                  label
                  size="large"
                  style={{ marginTop: 24, marginBottom: 12 }}
                  id={primaryColor?.info?.key}
                  value={primaryColor?.info?.value}
                  onChange={(id, value) =>
                    setPrimaryColor({
                      info: { ...primaryColor.info, value },
                      update: true,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                <Input
                  icon={<LinkOutlined />}
                  placeholder="Cor secundária"
                  label
                  size="large"
                  style={{ marginTop: 24, marginBottom: 12 }}
                  id={secondaryColor?.info?.key}
                  value={secondaryColor?.info?.value}
                  onChange={(id, value) =>
                    setSecondaryColor({
                      info: { ...secondaryColor.info, value },
                      update: true,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col
                xs={24}
                sm={10}
                md={10}
                lg={12}
                xl={8}
                xxl={6}
                style={{ marginTop: 5 }}
              >
                <Button
                  textButton="Salvar informações"
                  icon={<CloudUploadOutlined />}
                  size="large"
                  isLoading={isSaving}
                  onClick={handleUpload}
                  fullWidth
                />
              </Col>
            </Row>
          </CardBox>
        </S.Wrapper>
      )}
    </>
  );
};
