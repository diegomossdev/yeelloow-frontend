import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  text-align: center;
  padding: 80px 0 105px 0;
  margin-bottom: 30px;
`;

export const Title = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: 26px;
  font-weight: ${(props) => props.theme.font.medium};
  text-align: center;
`;

export const Subtitle = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  text-align: center;
  position: relative;

  :after {
    content: '';
    width: 100px;
    height: 5px;
    background-color: #ffffff;
    position: absolute;
    bottom: 0;
    left: calc(50% - 50px);
    margin-bottom: -30px;
  }
`;
