import {
  BackButton,
  Background,
  BigWrapper,
  ButtonWrapper,
  ContentBox,
  DeleteButton,
  ScoreBox,
  TitleBox,
  TitleWrapper,
} from "./Detail.Style";

export default function DetailPage() {
  return (
    <Background>
      <BigWrapper>
        <TitleWrapper>
          <TitleBox>타이틀</TitleBox>
          <ScoreBox>평점</ScoreBox>
        </TitleWrapper>
        <ContentBox></ContentBox>
        <ButtonWrapper>
          <DeleteButton>삭제</DeleteButton>
          <BackButton>뒤로가기</BackButton>
        </ButtonWrapper>
      </BigWrapper>
    </Background>
  );
}
