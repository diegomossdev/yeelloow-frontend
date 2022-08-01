import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.div`
  padding: 3em 3em 3em 3em;
  border-radius: 14px 14px 14px 14px;
  background-color: ${(props) => props.theme.colors.gray[300]};
  position: relative;

  :after {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    background-color: ${(props) => props.theme.colors.gray[300]};
    position: absolute;
    transform: scaleX(0.75) rotate(45deg);
    border-width: 0;
    box-sizing: content-box;
    top: calc(100% - 7px);
    left: 50%;
    transform: translateX(-50%) scaleX(0.75) rotate(45deg);
  }
`;

export const TextContent = styled.div`
  line-height: 22px;
  min-height: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  color: ${(props) => props.theme.colors.gray[800]};
`;

export const Image = styled.div`
  margin-top: 30px;

  width: 135px;
  height: 135px;
  border-radius: 50%;

  img {
    width: 135px;
    height: 135px;
    border-radius: 50%;
  }
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: ${(props) => props.theme.font.medium};
  color: ${(props) => props.theme.colors.gray[600]};
`;

export const Company = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colors.gray[500]};
`;
