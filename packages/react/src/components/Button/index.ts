import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.radii.lg};
`
