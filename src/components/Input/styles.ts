import styled from 'styled-components';

export const Wrapper = styled.div``;

export const InfoInput = styled.div`
  font-size: ${(props) => props.theme.font.sizes.xsmall};
  color: ${(props) => props.theme.colors.admin.gray[200]};
  font-style: italic;
`;

export const LabelError = styled.div`
  font-size: ${(props) => props.theme.font.sizes.xsmall};
  color: ${(props) => props.theme.colors.status.error.default};
  height: 19px;
`;
