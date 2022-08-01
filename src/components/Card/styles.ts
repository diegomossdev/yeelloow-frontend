import styled from 'styled-components';
import { Card as CardAntd } from 'antd';

export const Card = styled(CardAntd)`
  .ant-card-actions {
    padding: 15px 0;

    li {
      margin: 0;
      span {
        margin: 0;
      }
    }
  }
`;

export const ButtonAction = styled.button`
  background: transparent;
  border: none;
  width: 100%;
  padding: 15px 0;
  cursor: pointer;
`;
