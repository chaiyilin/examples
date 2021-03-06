import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;

  &::before {
    content: '◀';
    margin: 0 10px;
  }
`;

const Icon = styled.svg`
  transition: fill 0.25s;
  width: 48px;
  height: 48px;
  /* or: ${Link}:hover & { , see sass usage*/
  ${Label}:hover + & {
    fill: rebeccapurple;
  }
`;

export const Compo = () => (
  <Link href="#">
    <Label>Hovering my parent changes my style!</Label>
    <Icon viewBox="0 0 20 20">
      <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z" />
    </Icon>
  </Link>
);
