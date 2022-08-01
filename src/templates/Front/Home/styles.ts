import styled from 'styled-components';

export const Wrapper = styled.div``;

export const WrapperEvents = styled.div`
  padding: 60px 0;
`;
export const ContentEvents = styled.div`
  width: 100%;

  .ant-card-body {
    .ant-card-meta {
      .ant-card-meta-description {
        min-height: 44px;
        line-height: 22px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }

  @media (max-width: 992px) {
    .ant-row {
      margin-left: 0px !important;
      margin-right: 0px !important;

      .ant-card-body {
        .ant-card-meta {
          .ant-card-meta-description {
            min-height: 66px;
            -webkit-line-clamp: 3;
          }
        }
      }
    }
  }
`;

export const Vertodos = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  a {
    font-weight: ${(props) => props.theme.font.medium};
    background-color: ${(props) => props.theme.colors.primary};
    padding: 15px;
    border-radius: 10px;
    color: ${(props) => props.theme.colors.white};
  }
`;
