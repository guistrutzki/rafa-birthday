import styled from 'styled-components'
import { devices } from './devices'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  min-height: 100vh;
`

export const HeroSection = styled.div`
  width: 100%;
  background-color: #4BB0B3;
  position: relative;
  height: 90vh;

  h1 {
    color: #ffffff;
    font-weight: 700;

    @media ${devices.small} {
      padding: 0;
      font-size: 32px;
      margin: 24px;
      text-align: center;
    }

    @media ${devices.medium} {
      padding: 0;
      font-size: 32px;
      margin: 24px;
      text-align: center;
    }

    @media ${devices.large} {
      text-align: left;
      font-size: 40px;
      margin: 60px 60px 0;
      font-size: 60px;
    }
  }

  p {
    font-weight: 500;
    color: #fff;

    @media ${devices.small} {
      margin: 24px 60px 60px;
      font-size: 18px;
      margin: 24px;
      text-align: center;
    }

    @media ${devices.medium} {
      margin: 24px 60px 60px;
      font-size: 24px;
      margin: 24px;
      text-align: center;
    }

    @media ${devices.large} {
      margin: 24px 60px 60px;
      font-size: 32px;
      margin: 24px 60px 0;
      text-align: left;
    }
  }
`

export const FenceImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;

  @media ${devices.small} {
    width: 150%;
  }

  @media ${devices.medium} {
    width: 120%;
  }

  @media ${devices.large} {
    width: 100%;
  }
`

export const RafaImg = styled.img`
  position: absolute;
  z-index: 10;

  @media ${devices.small} {
    width: 350px;
    right: 50%;
    bottom: 50px;
    transform: translate(60%);
  }

  @media ${devices.medium} {
    width: 400px;
    right: 50%;
    transform: translate(60%);
  }

  @media ${devices.large} {
    right: 5%;
    bottom: 50px;
    width: 470px;
    transform: translate(0);
  }
`

export const CloudImg = styled.img`
  position: absolute;
  top: -150px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 25;

  @media ${devices.small} {
    top: -50px;
  }

  @media ${devices.medium} {
    top: -70px;
  }

  @media ${devices.large} {
    top: -150px;
  }
`

export const DogImg = styled.img`
  position: absolute;
  z-index: 15;

  @media ${devices.small} {
    left: 50px;
    bottom: 30vw;
    width: 20vw;
  }

  @media ${devices.medium} {
    left: 50px;
    bottom: 15vw;
    width: 20vw;
  }

  @media ${devices.large} {
    left: 100px;
    bottom: 200px;
    width: 250px;
  }
`

export const CowImage = styled.img`
  position: absolute;
  left: 400px;
  bottom: 200px;
  width: 250px;
  z-index: 15;

  @media ${devices.small} {
    width: 20vw;
    left: 75%;
    bottom: 30vw;
  }

  @media ${devices.medium} {
    width: 25vw;
    left: 70%;
    bottom: 15vw;
  }

  @media ${devices.large} {
    left: 400px;
    bottom: 200px;
    width: 250px;
  }
`

export const SheepImg = styled.img`
  position: absolute;
  z-index: 15;

  @media ${devices.small} {
    left: 0;
    bottom: 60vw;
    width: 20vw;
    transform: rotate(20deg);
  }

  @media ${devices.medium} {
    left: 20px;
    bottom: 40vw;
    width: 20vw;
  }

  @media ${devices.large} {
    left: 700px;
    bottom: 200px;
    width: 250px;
    transform: rotate(0);
  }
`

export const ChickImg = styled.img`
  position: absolute;
  z-index: 15;

  @media ${devices.small} {
    bottom: 60vw;
    right: 30px;
    width: 70px;
    transform: rotate(-20deg);
  }

  @media ${devices.medium} {
    bottom: 45vw;
    right: 60px;
    width: 100px;
    transform: rotate(-20deg);
  }

  @media ${devices.large} {
    bottom: 250px;
    right: 60px;
    width: 100px;
    transform: rotate(0);
  }
`

export const LinesImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  z-index: 5;

  @media ${devices.small} {
    top: 150px;
    width: 90%;
  }

  @media ${devices.medium} {
    top: 150px;
    width: 70%;
  }

  @media ${devices.large} {
    top: 0;
    width: 50%;
  }
`

export const FlowerImg = styled.img`
  position: absolute;
  z-index: 15;

  @media ${devices.small} {
    top: 150px;
    right: 30px;
    width: 50px;
  }

  @media ${devices.medium} {
    top: 150px;
    right: 60px;
    width: 60px;
  }

  @media ${devices.large} {
    top: 20px;
    right: 50px;
    width: 60px;
  }
`

export const HorseImg = styled.img`
  position: absolute;
  z-index: 15;
  transform: rotate(-20deg);

  @media ${devices.small} {
    width: 15vw;
    right: 65%;
    top: 150px;
  }

  @media ${devices.medium} {
    width: 10vw;
    right: 70%;
    top: 15vw;
  }

  @media ${devices.large} {
    top: 178px;
    right: 600px;
    width: 80px;
  }
`

export const GallerySection = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #fff;
`

export const GalleryContent = styled.div`
  z-index: 999;
  position: absolute;
  top: -200px;
  left: 0;
  right: 0;
  width: 100%;

  h2 {
    font-size: 52px;
    color: #4BB0B3;
    margin: 60px;
    margin-top: 300px;
    background-color: #fff;
  }
`

export const PolaroidContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 42px;
  margin: 60px 60px 60px;
`