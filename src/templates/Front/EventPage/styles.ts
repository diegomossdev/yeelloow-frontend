import styled from 'styled-components';

export const Wrapper = styled.div``;

export const ContentEvent = styled.div``;

export const Title = styled.div`
  span {
  }
`;

export const Subtitle = styled.div`
  span {
  }
`;

export const Description = styled.div`
  margin: 60px 0;
  display: flex;
  flex-direction: column;

  strong {
    margin-bottom: 15px;
    font-weight: ${(props) => props.theme.font.regular};
    font-size: 24px;
  }
  span {
  }
`;

export const TitlePhotos = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.colors.gray[300]};

  span {
    font-weight: ${(props) => props.theme.font.regular};
    font-size: 24px;
  }
`;

export const CallUs = styled.div`
  margin: 60px 0 120px 0;
  display: flex;
  flex-direction: column;

  strong {
    font-weight: ${(props) => props.theme.font.regular};
    font-size: 24px;
  }
  span {
  }
`;

export const Infos = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  a {
    margin-top: 15px;
    background: #43bf51;
    padding: 10px 15px;
    border-radius: 10px;
    color: ${(props) => props.theme.colors.white};

    span {
      font-weight: ${(props) => props.theme.font.medium};
    }
  }
`;
