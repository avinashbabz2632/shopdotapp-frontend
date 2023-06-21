/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { orange100 } from '../../../theme/variables';

export const A = styled.a`
  color: ${orange100};
  font-family: 'Mulish', sans-serif;
  font-size: 16px;
  text-decoration: none;

  &.sm {
    font-size: 14px;
    letter-spacing: -0.02em;
  }

  &[disabled] {
    pointer-events: none;
  }

  &:hover {
    color: ${orange100};
  }
`;

export const LinkMod = styled(Link)`
  color: ${orange100};
  font-family: 'Mulish', sans-serif;
  // font-size: 14px;
  // text-decoration: none;
  outline: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
  border: none;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  &:hover {
    color: ${orange100};
    opacity: 0.8;
  };
`;
