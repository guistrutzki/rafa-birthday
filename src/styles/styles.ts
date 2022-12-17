import styled from 'styled-components'

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
    margin: 60px 60px 0;
    font-size: 60px;
    font-weight: 700;
  }

  p {
    margin: 24px 60px 60px;
    font-size: 32px;
    font-weight: 500;
    color: #fff;
  }
`

export const FenceImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 20;
`

export const RafaImg = styled.img`
  position: absolute;
  bottom: 50px;
  right: 5%;
  width: 470px;
  z-index: 10;
`

export const CloudImg = styled.img`
  position: absolute;
  top: -150px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 25;
`

export const DogImg = styled.img`
  position: absolute;
  left: 100px;
  bottom: 200px;
  right: 0;
  width: 250px;
  z-index: 15;
`

export const CowImage = styled.img`
  position: absolute;
  left: 400px;
  bottom: 200px;
  right: 0;
  width: 250px;
  z-index: 15;
`

export const SheepImg = styled.img`
  position: absolute;
  left: 700px;
  bottom: 200px;
  right: 0;
  width: 250px;
  z-index: 15;
`

export const ChickImg = styled.img`
position: absolute;
bottom: 250px;
right: 60px;
width: 100px;
z-index: 15;
`

export const LinesImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  z-index: 5;
`

export const FlowerImg = styled.img`
  position: absolute;
  top: 20px;
  right: 50px;
  width: 60px;
  z-index: 15;
`

export const GardenForkImg = styled.img`
  position: absolute;
  top: 20px;
  right: 500px;
  width: 80px;
  z-index: 15;
`

export const HorseImg = styled.img`
  position: absolute;
  top: 170px;
  right: 600px;
  width: 80px;
  z-index: 15;
  transform: rotate(-20deg);
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