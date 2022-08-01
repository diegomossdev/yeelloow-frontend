import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Strong = styled.strong`
  font-size: 14px;
  color: ${(props) => props.theme.colors.admin.gray[400]};
`;

export const Label = styled.label`
  width: 100%;
  font-size: 12px;
`;

export const BoxImg = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;

  img {
    width: 100%;
  }
`;

export const DelPhoto = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  border-color: ${(props) => props.theme.colors.status.error.default};
  background: ${(props) => props.theme.colors.status.error.default};
  font-weight: ${(props) => props.theme.font.medium};
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
  border: none;
  padding: 5px 10px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;
