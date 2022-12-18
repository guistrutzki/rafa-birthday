import * as S from './PolaroidCard.styles';

interface PolaroidCardProps {
  imageUrl: string;
}

export const PolaroidCard = ({ imageUrl }: PolaroidCardProps) => {
  return (
    <S.Container>
      <S.Image src={imageUrl} />
    </S.Container>
  );
};
