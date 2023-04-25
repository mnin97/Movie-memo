import WriteWrapper from "../writeWrapper";
import { BG, TitleBox } from "./Main.Style";

export default function MainPage() {
  return (
    <BG>
      <TitleBox>
        <h1>Collecter</h1>
        <p>좋아하는 영화를 기록하자</p>
      </TitleBox>
      <WriteWrapper />
    </BG>
  );
}
