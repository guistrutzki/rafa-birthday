import { PolaroidCard } from '../components/PolaroidCard';
import * as S from '../styles/styles';

export default function Home() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <S.Container>
      <S.HeroSection>
        <h1>Fazendinha da Rafa</h1>
        <p>Comemoração de aniversários dos dois aninhos</p>

        <S.FenceImg src="/images/fence.png" />
        <S.RafaImg src="/images/rafa-image.png" />
        <S.DogImg src="/images/dog.png" />
        <S.CowImage src="/images/cow.png" />
        <S.SheepImg src="/images/sheep.png" />
        <S.ChickImg src="/images/chick.png" />
        <S.LinesImg src="/images/lines.png" />
        <S.FlowerImg src="/images/flower.png" />
        <S.HorseImg src="/images/horse.png" />
      </S.HeroSection>

      <S.GallerySection>
        <S.CloudImg src="/images/cloud.png" />
        <S.GalleryContent>
          <h2>Galeria de fotos</h2>
          <S.PolaroidContainer>
            {images.map((eachImage) => (
              <PolaroidCard key={String(eachImage)} />
            ))}
          </S.PolaroidContainer>
        </S.GalleryContent>
      </S.GallerySection>
    </S.Container>
  );
}
