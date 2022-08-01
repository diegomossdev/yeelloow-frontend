import styled from 'styled-components';

export const Wrapper = styled.div<{ bgColor?: string }>`
  padding: 60px 0;
  background-color: ${(props) =>
    props.bgColor ? `${props.bgColor};` : '#fff;'};
`;

export const Text = styled.div<{ textColor?: string }>`
  color: ${(props) =>
    props.textColor ? `${props.textColor};` : `${props.theme.colors.black};`};
  font-size: 32px;
  font-weight: 600;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Image = styled.div`
  display: flex;

  img {
    width: 100%;
  }
`;
