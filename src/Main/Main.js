import { Link } from "react-router-dom";
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
import { useState } from "react";

export default function MainPage() {
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")));

  console.log(posts);

  return (
    <BG>
      <TitleBox>
        <h1>Collecter</h1>
        <p>좋아하는 영화를 기록하자</p>
      </TitleBox>
      <WriteBox>
        <InputBox>
          <SearchInput type="text" placeholder="검색하세요" />
          <FilterInput placeholder="평점 수" />
        </InputBox>
        <PostBox>
          {posts.map((a) => (
            <Link to="/detail" style={{ textDecoration: "none" }}>
              <Post>
                <h3>{a.title}</h3>
                <p>{a.score}</p>
              </Post>
            </Link>
          ))}
        </PostBox>
        <ButtonBox>
          <Link to="/submit" style={{ textDecoration: "none" }}>
            <Button>글 등록</Button>
          </Link>
        </ButtonBox>
      </WriteBox>
    </BG>
  );
}
