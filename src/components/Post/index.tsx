import * as S from './styles';

export function Post() {
  return (
    <S.PostContainer>

      <S.HeaderPost>

        <S.Author>
          <S.AuthorImage src='https://github.com/Grandop.png'/>
          <S.AuthorInfo>
            <S.UserName>Pedro Grando</S.UserName>
            <S.UserOffice>Frontend Developer</S.UserOffice>
          </S.AuthorInfo>
        </S.Author>

        <S.Time dateTime="">Publicado há 1h</S.Time>

      </S.HeaderPost>

    </S.PostContainer>
  )
}

