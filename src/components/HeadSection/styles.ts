import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  :after {
    content: '';
    width: 100px;
    height: 5px;
    background-color: ${(props) => props.theme.colors.primary};
    margin-top: 15px;
  }
`;

export const Title = styled.div`
  font-size: 26px;
  font-weight: ${(props) => props.theme.font.medium};
  text-align: center;
`;

export const SubTitle = styled.div`
  font-size: 16px;
  text-align: center;
`;
