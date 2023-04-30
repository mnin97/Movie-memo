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
  const [posts] = useState(JSON.parse(localStorage.getItem("posts")));
  const [search, setSearch] = useState("");
  const [score, setScore] = useState("");

  return (
    <BG>
      <TitleBox>
        <h1>Collecter</h1>
        <p>좋아하는 영화를 기록하자</p>
      </TitleBox>
      <WriteBox>
        <InputBox>
          <SearchInput
            type="text"
            placeholder="검색하세요"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FilterInput
            placeholder="평점 "
            value={score}
            onChange={(e) => {
              setScore(e.target.value);
            }}
          />
        </InputBox>
        <PostBox>
          {posts
            .filter(
              (post) =>
                post.title.toLowerCase().includes(search.toLowerCase()) &&
                (score === "" || post.score === score)
            )
            .map((post) => (
              <Link
                to={`/detail/${post.id}`}
                style={{ textDecoration: "none" }}
                key={post.id}
              >
                <Post>
                  <h3>{post.title}</h3>
                  <p>{post.score}</p>
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
