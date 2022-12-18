import * as S from './PolaroidCard.styles';

interface PolaroidCardProps {
  imageUrl: string;
  rotation: string;
}

export const PolaroidCard = ({ imageUrl, rotation }: PolaroidCardProps) => {
  return (
    <S.Container rotation={rotation}>
      <S.Image src={imageUrl} />
    </S.Container>
  );
};
