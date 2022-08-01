import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1070px;
  max-height: 720px;
  border-radius: 32px;
  background: #fff;
  -webkit-box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 20%);
  box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 20%);
`;

export const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`;

export const LeftContent = styled.div`
  position: relative;
  display: flex;
  height: 100%;
`;

export const RightContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;

  @media (min-width: 992px) {
    width: 50%;
  }
`;

export const RightContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  text-align: center;
  font-weight: ${(props) => props.theme.font.bold};
  font-size: ${(props) => props.theme.font.sizes.xxxlarge};
`;

export const SubTitle = styled.div`
  margin-bottom: ${(props) => props.theme.spacings.xxlarge};
  text-align: center;
`;
