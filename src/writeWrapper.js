import { Link } from "react-router-dom";
import {
  Button,
  ButtonBox,
  FilterInput,
  InputBox,
  Post,
  PostBox,
  SearchInput,
  WriteBox,
} from "./\bMain/Main.Style";

export default function WriteWrapper() {
  return (
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
        <Link to="/submit">
          <Button>글 등록</Button>
        </Link>
      </ButtonBox>
    </WriteBox>
  );
}
