import * as S from './styles';
import coverImage from '../../assets/images/coverImage.svg';
import { PencilLine } from 'phosphor-react';

export function SideBar() {
  return (
    <S.SideBar>
      <S.CoverImage src={coverImage}/>  

      <S.Profile>
        <S.userImage src='https://github.com/Grandop.png'/>
        <S.UserName>Pedro Grando</S.UserName>
        <S.UserOffice>Frontend Developer</S.UserOffice>
      </S.Profile>

      <S.Footer>
        <S.EditButton href='#'>
          <PencilLine size={20}/>
          Editar seu perfil
        </S.EditButton>
      </S.Footer>

    </S.SideBar>
  )
}
