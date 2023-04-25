import {
  BG,
  Button,
  ButtonBox,
  FilterInput,
  InputBox,
  Post,
  PostBox,
  SearchInput,
  TitleBox,
  WriteBox,
} from "./Main.Style";

export default function MainPage() {
  return (
    <BG>
      <TitleBox>
        <h1>Collecter</h1>
        <p>좋아하는 영화를 기록하자</p>
      </TitleBox>
      <WriteBox>
        <InputBox>
          <SearchInput type="text" placeholder="검색하세요" />
          <FilterInput placeholder="최신순" />
        </InputBox>
        <PostBox>
          <Post>
            <h3>어벤져스</h3>
          </Post>
        </PostBox>
        <ButtonBox>
          <Button>글 등록</Button>
        </ButtonBox>
      </WriteBox>
    </BG>
  );
}
