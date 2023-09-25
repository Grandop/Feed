import * as S from './styles';
import igniteLogo from '../../assets/images/igniteLogo.svg';


export function Header() {

  return (
    <S.HeaderContainer>
      <S.Logo src={igniteLogo} />
    </S.HeaderContainer>
  )
}
