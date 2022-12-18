import { PolaroidCard } from '../components/PolaroidCard';
import * as S from '../styles/styles';

export default function Home() {
  const images = [
    {
      id: '1',
      url: 'https://drive.google.com/uc?export=view&id=1Ci0CTKt7w0Ipw5lcEOyttvnqTZjVHxxV',
    },
    {
      id: '2',
      url: 'https://drive.google.com/uc?export=view&id=1ZWR5QqNYNp_-ha72lmGfgxDhjJtbdjv5',
    },
    {
      id: '3',
      url: 'https://drive.google.com/uc?export=view&id=1R684LmUrsqulhyGpziqLl28G5D6FY7y2',
    },
    {
      id: '4',
      url: 'https://drive.google.com/uc?export=view&id=1pLdjwUnjKqgEUI7pE4ndUtra9Q3nn0DK',
    },
    {
      id: '5',
      url: 'https://drive.google.com/uc?export=view&id=1Uc-mdkH6PDV9F2lDEGkRcVwnPeM3TKZI',
    },
  ];

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
              <PolaroidCard key={eachImage.id} imageUrl={eachImage.url} />
            ))}
          </S.PolaroidContainer>
        </S.GalleryContent>
      </S.GallerySection>
    </S.Container>
  );
}
