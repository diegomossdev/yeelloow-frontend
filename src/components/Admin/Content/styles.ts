import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitlePage = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacings.xsmall};
  width: 100%;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: ${(props) => props.theme.font.sizes.medium};
    font-weight: ${(props) => props.theme.font.medium};
    color: ${(props) => props.theme.colors.admin.gray[400]};
    margin: 0;
  }

  a {
    font-size: ${(props) => props.theme.font.sizes.medium};
    font-weight: ${(props) => props.theme.font.regular};
    color: ${(props) => props.theme.colors.admin.gray[300]};
    text-decoration: underline;

    span {
      padding-right: 5px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
`;
