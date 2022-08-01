import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.admin.colorized[100]};
  background: linear-gradient(
    145deg,
    ${(props) => props.theme.colors.yeelloow} 0%,
    ${(props) => props.theme.colors.admin.colorized[200]} 75%,
    ${(props) => props.theme.colors.admin.colorized[300]} 100%
  );
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: absolute;

  @media (min-width: 992px) {
    padding: 72px;
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  margin-top: 5px;

  @media (min-width: 992px) {
    margin-top: 50px;
  }
`;
