import { styled } from 'styled-components'; 

export const SideBar = styled.aside`  
  background-color: ${({ theme }) => theme.colors.neutral[800]};
  border-radius: 8px;
  overflow: hidden;
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -2rem;
`;

export const userImage = styled.img`
  box-sizing: initial;
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme.colors.neutral[800]};
  outline: 2px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const UserName = styled.span`
  margin-top: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.neutral[100]};
`;

export const UserOffice = styled.span`
  font-size: 0.88rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.neutral[400]};
`; 

export const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[600]};
  margin-top: 1.5rem;
  padding: 1.5rem 2rem 2rem;
`;
export const EditButton = styled.a`
  width: 192px;
  height: 50px;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  height: 50px;
  padding: 0 1.5rem;
  font-weight: bold;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  transition: color 0.1s, background-color 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.neutral[0]};
  }
`;

