import styled from 'styled-components';

export const Wrapper = styled.div``;

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

export const TitleQs = styled.div`
  margin-bottom: 15px;
  font-size: 26px;
`;

export const TextQs = styled.div`
  text-align: justify;
`;

export const BoxImg = styled.div``;
