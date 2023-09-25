import React from 'react'
import * as S from './styles';
import { SideBar } from '../SideBar';
import { Post } from '../Post';

export function Wrapper() {
  return (
    <S.Container>
      <SideBar/>
      <Post/>
    </S.Container>
  )
}
