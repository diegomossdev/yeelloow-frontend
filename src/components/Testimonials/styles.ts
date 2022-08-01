import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  @media (min-width: 993px) {
    width: 100%;
    display: flex;
    flex-direction: center;
    align-items: center;

    .ant-row {
      display: flex;
      flex-direction: center;
      align-items: center;
    }
  }

  @media (max-width: 992px) {
    .ant-row {
      margin-left: 0px !important;
      margin-right: 0px !important;
    }
  }
`;
