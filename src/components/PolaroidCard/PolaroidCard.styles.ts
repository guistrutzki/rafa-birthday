import styled from 'styled-components'

interface ContainerProps {
  rotation: string
}

export const Container = styled.div<ContainerProps>`
  flex: 1;
  height: 380px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  padding: 24px 16px 0;

  transform: rotate(${({rotation}) => rotation});
`

export const Image = styled.img`
  width: 100%;
  height: 85%;
  background-color: rgba(0, 0, 0, 0.1);
  object-fit: cover;
`