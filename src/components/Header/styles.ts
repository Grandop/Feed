import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[800]};
  height: 5rem;
  display: flex;
  justify-content: center;
  padding: 1.25rem 0;
`; 

export const Logo = styled.img`
  height: 2rem;
`;