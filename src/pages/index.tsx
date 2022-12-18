import { PolaroidCard } from '../components/PolaroidCard';
import * as S from '../styles/styles';

export default function Home() {
  const images = [
    {
      id: '1',
      url: 'https://drive.google.com/uc?export=view&id=1Ci0CTKt7w0Ipw5lcEOyttvnqTZjVHxxV',
      rotation: '5deg',
    },
    {
      id: '2',
      url: 'https://drive.google.com/uc?export=view&id=1ZWR5QqNYNp_-ha72lmGfgxDhjJtbdjv5',
      rotation: '3deg',
    },
    {
      id: '3',
      url: 'https://drive.google.com/uc?export=view&id=1R684LmUrsqulhyGpziqLl28G5D6FY7y2',
      rotation: '-3deg',
    },
    {
      id: '4',
      url: 'https://drive.google.com/uc?export=view&id=1pLdjwUnjKqgEUI7pE4ndUtra9Q3nn0DK',
      rotation: '-5deg',
    },
    {
      id: '5',
      url: 'https://drive.google.com/uc?export=view&id=1Uc-mdkH6PDV9F2lDEGkRcVwnPeM3TKZI',
      rotation: '0deg',
    },
    {
      id: '6',
      url: 'https://drive.google.com/uc?export=view&id=1TsR3zatExvhXoFuzXI1UXUip0WJwqVCI',
      rotation: '3deg',
    },
    {
      id: '7',
      url: 'https://drive.google.com/uc?export=view&id=1E2GKYme2rJTNVlLy4yjJBkGdEWCwiAjh',
      rotation: '-3deg',
    },
    {
      id: '8',
      url: 'https://drive.google.com/uc?export=view&id=1uRidgoczh32FeNDxBvnh2wzoz4O7gLbp',
      rotation: '-5deg',
    },
    {
      id: '9',
      url: 'https://drive.google.com/uc?export=view&id=1yWOatYU1AtNhQdHB6GFPJRRmllf1jzK_',
      rotation: '-3deg',
    },
    {
      id: '10',
      url: 'https://drive.google.com/uc?export=view&id=19skrW59fAEntVYN0afdXyvPqOTV5wxJ8',
      rotation: '2deg',
    },
    {
      id: '11',
      url: 'https://drive.google.com/uc?export=view&id=1x19at5nk86ARlZehgB6Gs2fZLbdKuWi-',
      rotation: '0deg',
    },
    {
      id: '12',
      url: 'https://drive.google.com/uc?export=view&id=1fp68GTAmca7RqOISyhBFgLce6Hlv9sDy',
      rotation: '3deg',
    },
    {
      id: '13',
      url: 'https://drive.google.com/uc?export=view&id=1bHumjtg0EVvsAx17vRnL4meB4z6UMbck',
      rotation: '5deg',
    },
    {
      id: '14',
      url: 'https://drive.google.com/uc?export=view&id=1PmVezNMULdj1IpB5rK8eB2J7BLtDd4BN',
      rotation: '2deg',
    },
    {
      id: '15',
      url: 'https://drive.google.com/uc?export=view&id=1PmVezNMULdj1IpB5rK8eB2J7BLtDd4BN',
      rotation: '-2deg',
    },
    {
      id: '16',
      url: 'https://drive.google.com/uc?export=view&id=15TmXN5omn2HznmRxnxHJtmLkItjl53M5',
      rotation: '-4deg',
    },
    {
      id: '17',
      url: 'https://drive.google.com/uc?export=view&id=1TWyj-dObtKj9JzOqkZ4uiNjHQxRB2Ckv',
      rotation: '0deg',
    },
    {
      id: '18',
      url: 'https://drive.google.com/uc?export=view&id=1Zu2rV5JdkDKAXtXRjZXltTwk2gM5GmCu',
      rotation: '2deg',
    },
    {
      id: '19',
      url: 'https://drive.google.com/uc?export=view&id=1VXwowrL5bCJYu-6QW4okmKhprOsxEQB1',
      rotation: '4deg',
    },
    {
      id: '20',
      url: 'https://drive.google.com/uc?export=view&id=1pGDuMdaNUVtKO6EMLuPOCepLQzy535-C',
      rotation: '-4deg',
    },
    {
      id: '21',
      url: 'https://drive.google.com/uc?export=view&id=1kZu-nfEEXHJ8DiW3kWV-LdKR7wNnBRKV',
      rotation: '-2deg',
    },
    {
      id: '22',
      url: 'https://drive.google.com/uc?export=view&id=12xoyxcWiqM5RAIjCQtYzCxTRwcqIr01M',
      rotation: '3deg',
    },
    {
      id: '23',
      url: 'https://drive.google.com/uc?export=view&id=1pf1C1AmmwKvnRjrpnNiUqNGUJk3ZZwvK',
      rotation: '5deg',
    },
    {
      id: '24',
      url: 'https://drive.google.com/uc?export=view&id=1hILnehD7flSJ4cs47qXAiPcPECYMuU1F',
      rotation: '0deg',
    },
    {
      id: '25',
      url: 'https://drive.google.com/uc?export=view&id=1fSirqt-xNae04i5I2cRPCb16bVE6WDdC',
      rotation: '2deg',
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
              <PolaroidCard
                key={eachImage.id}
                imageUrl={eachImage.url}
                rotation={eachImage.rotation}
              />
            ))}
          </S.PolaroidContainer>
        </S.GalleryContent>
      </S.GallerySection>
    </S.Container>
  );
}
