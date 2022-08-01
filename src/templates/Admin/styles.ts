import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: ${(props) => props.theme.colors.admin.gray[100]};
`;

export const Content = styled.div`
  display: flex;
  padding: 32px;

  @media (min-width: 992px) {
    width: calc(100% - 260px);
    margin-left: 260px;
    padding-top: 105px;
  }
`;
