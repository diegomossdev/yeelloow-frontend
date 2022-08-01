import styled from 'styled-components';

export const Wrapper = styled.div``;

export const List = styled.ul`
  li {
    list-style: none;
  }
`;

export const TitleSection = styled.div`
  margin-bottom: 15px;
  font-size: 26px;
`;

export const TitleInfo = styled.div`
  margin-top: 15px;
  span {
    text-transform: capitalize;
    font-size: 18px;
  }
`;

export const ValueInfo = styled.div``;

export const LiWhats = styled.li`
  display: flex;
  flex-direction: column;

  a {
    background: #43bf51;
    color: ${(props) => props.theme.colors.white};
    margin-top: 10px;
    padding: 10px 15px;
    border-radius: 10px;
    width: 165px;

    span {
      font-weight: ${(props) => props.theme.font.medium};
    }
  }
`;
