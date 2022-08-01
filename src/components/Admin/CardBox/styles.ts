import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
  word-wrap: break-word;
  background-color: #fff;
  border: inherit !important;
  background-clip: border-box;
  border-radius: 8px;
  box-shadow: 0 4px 25px 0 rgb(168 180 208 / 10%);
  margin-bottom: 1.5rem;
`;

export const Title = styled.div`
  font-size: ${(props) => props.theme.font.sizes.medium};
  font-weight: ${(props) => props.theme.font.medium};
  color: 1px solid ${(props) => props.theme.colors.admin.gray[300]};
  padding: 15px;
  border-bottom: 1px solid ${(props) => props.theme.colors.admin.gray[100]};
`;

export const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 25px;
  margin: 0;
  position: relative;
`;
