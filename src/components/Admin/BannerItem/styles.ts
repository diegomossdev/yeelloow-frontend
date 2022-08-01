import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: ${(props) => props.theme.spacings.xsmall};
  background: ${(props) => props.theme.colors.white};
  margin-bottom: ${(props) => props.theme.spacings.small};
`;

export const CardFooter = styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacings.xsmall};
  border-bottom-left-radius: ${(props) => props.theme.spacings.xsmall};
  border-bottom-right-radius: ${(props) => props.theme.spacings.xsmall};
`;

export const Name = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-bottom: ${(props) => props.theme.spacings.xxxsmall};
`;

export const InfosAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div`
  span {
    font-weight: ${(props) => props.theme.font.medium};
    padding-right: 5px;
  }
`;

export const ButtonAction = styled.div``;
